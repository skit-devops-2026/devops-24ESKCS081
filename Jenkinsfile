pipeline {
    agent any

    environment {
        IMAGE_NAME = 'ghcr.io/skit-devops-2026/devops-24eskcs081'
        IMAGE_TAG  = "${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out PlayBook source code...'
                checkout scm
            }
        }

        stage('Verify Project Files') {
            steps {
                sh '''
                    test -f index.html || { echo "ERROR: index.html not found"; exit 1; }
                    test -f style.css  || { echo "ERROR: style.css not found"; exit 1; }
                    test -f script.js  || { echo "ERROR: script.js not found"; exit 1; }
                    test -f Dockerfile || { echo "ERROR: Dockerfile not found"; exit 1; }
                    test -f docker-compose.yml || { echo "ERROR: docker-compose.yml not found"; exit 1; }
                    test -f k8s/deployment.yaml || { echo "ERROR: k8s/deployment.yaml not found"; exit 1; }
                    test -f k8s/service.yaml || { echo "ERROR: k8s/service.yaml not found"; exit 1; }
                    echo "PlayBook project structure is valid."
                '''
            }
        }

        stage('Test') {
            steps {
                sh 'bash tests/test_site.sh'
            }
        }

        stage('Build Validation') {
            steps {
                sh 'make build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build --build-arg GIT_COMMIT=$(git rev-parse --short HEAD) -t $IMAGE_NAME:$IMAGE_TAG -t $IMAGE_NAME:latest .'
            }
        }

        stage('Docker Push') {
            when {
                branch 'main'
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'ghcr-credentials', usernameVariable: 'GHCR_USER', passwordVariable: 'GHCR_TOKEN')]) {
                    sh '''
                        echo "$GHCR_TOKEN" | docker login ghcr.io -u "$GHCR_USER" --password-stdin
                        docker push $IMAGE_NAME:$IMAGE_TAG
                        docker push $IMAGE_NAME:latest
                        docker logout ghcr.io
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            when {
                branch 'main'
            }
            steps {
                sh '''
                    kubectl apply -f k8s/deployment.yaml
                    kubectl apply -f k8s/service.yaml
                    kubectl rollout status deployment/playbook-web --timeout=120s
                '''
            }
        }
    }

    post {
        success {
            echo 'PlayBook Jenkins pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the failed stage logs.'
        }
        always {
            cleanWs()
        }
    }
}

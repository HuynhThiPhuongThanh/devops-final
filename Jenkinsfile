pipeline {
    agent {
        docker { 
            image 'node:18-alpine' 
            args '-u root'
        }
    }
    stages {
        stage('Cài đặt & Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
        stage('Build Image') {
            steps {
                script {
                    sh 'docker build -t my-app .'
                }
            }
        }
        stage('Triển khai') {
            steps {
                sh 'docker-compose up -d --force-recreate web-app'
            }
        }
    }
}
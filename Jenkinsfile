pipeline {
    agent any
    stages {
        stage('Cài đặt & Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
        stage('Build Image') {
            steps {
                sh 'docker build -t my-app .'
            }
        }
        stage('Triển khai') {
            steps {
                sh 'docker-compose up -d --force-recreate web-app'
            }
        }
    }
}
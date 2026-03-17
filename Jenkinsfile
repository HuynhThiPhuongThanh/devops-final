pipeline {
    agent any
    
    stages {
        stage('Cài đặt Node.js') {
            steps {
                sh 'apt-get update && apt-get install -y nodejs npm'
            }
        }
        
        stage('Cài đặt & Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
        
        stage('Build & Deploy Docker') {
            steps {
                sh 'docker build -t my-app .'
                sh 'docker-compose up -d --force-recreate web-app'
            }
        }
    }
    
}
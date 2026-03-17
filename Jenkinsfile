pipeline {
    agent any
    
    tools {
        
        nodejs 'node20'
    }
    
    stages {
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
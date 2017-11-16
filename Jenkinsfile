pipeline {
    agent any
    tools {nodejs "node-v7"}

    stages {
        stage('prepare') {
            steps {
                sh 'npm install --ignore-scripts'
            }
        }
        stage('lint') {
            steps {
                sh 'npm run lint --ignore-scripts'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build --ignore-scripts'
                sh 'npm run build-schemas --ignore-scripts'
                sh 'npm run build-doc --ignore-scripts'
            }
        }
        stage('test') {
            steps {
                // sh 'npm run test'
                echo 'nothing'
            }
        }
    }
}

pipeline {
    agent any
    tools {nodejs "node-v7"}
    environment {
        GULP = './node_modules/.bin/gulp'
    }

    stages {
        stage('prepare') {
            steps {
                sh 'npm install --ignore-scripts'
            }
        }
        stage('lint') {
            steps {
                sh '${GULP} lint'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
                sh 'npm run build-schemas'
                sh 'npm run build-doc'
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

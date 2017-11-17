pipeline {
    agent any
    tools {nodejs "node-v7"}
    def gulp = "${npm bin}/gulp"

    stages {
        stage('prepare') {
            steps {
                sh 'npm install --ignore-scripts'
            }
        }
        stage('lint') {
            steps {
                sh '${gulp} lint'
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

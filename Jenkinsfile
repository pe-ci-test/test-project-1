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
                sh '${GULP} build'
                sh '${GULP} build-schemas'
                sh '${GULP} build-doc'
            }
        }
        stage('test') {
            steps {
                echo '${GULP} test'
            }
        }
    }
}

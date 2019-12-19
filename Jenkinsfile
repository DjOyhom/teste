node{
    stage("Scm Checkout"){
        git 'https://github.com/DjOyhom/teste.git'
    }
    stage("npm install"){
        bat "npm install"
    }
    stage("Build docker image"){
        bat "docker build -t rodri98/apigdd-jenkins ."
    }
    stage("Pushing image to docker hub"){
        bat "docker login -u rodri98 -p 19+Enero+1998"
        bat "docker push rodri98/apigdd-jenkins"
    }
}
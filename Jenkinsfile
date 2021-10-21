pipeline{
	agent any
	
	stages{
		stage('Build'){
            steps {
                bat "npm install"
                bat "npm run build"
                bat "npm prod"
            }
		}		
        stage('Deploy'){
			environment {
        		tomcatWeb = 'C:\\Users\\john.alex.ocay\\Documents\\Boot Camp\\Dev Ops\\DevOps Assessment\\Tomcat\\apache-tomcat-9.0.54-windows-x64\\apache-tomcat-9.0.54\\webapps'
    		}
			steps{
				bat "copy target\\angular.war \"${tomcatWeb}\\ws.war\""
			}		
		}
	}
}

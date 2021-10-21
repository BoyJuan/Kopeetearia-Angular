pipeline{
	agent any
	
	stages{
		stage('Build'){
            git branch: 'Master', url: 'https://github.com/BoyJuan/Kopeetearia-Angular.git'
            bat "npm install"
            bat "npm run build"
		}
		stage('Deploy') {
            echo "unsaonszzz?"
		}
		
	}
}

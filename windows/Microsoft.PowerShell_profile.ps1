# http://krasimirtsonev.com/blog/article/Git-under-windows-console-mode-helpful-tips
# location: C:\Users\krasimir\Documents\WindowsPowerShell\

function goTo {
	set-location $args[0]
}

# ************************************************** git

function st {
	git status
}
function ci {
	git add .
	git commit -am $args[0]
}
function cipm {
	git add .
	git commit -am $args[0]
	git push origin master
}
function cipd {
	git add .
	git commit -am $args[0]
	git push origin develop
}
function cipp {
	git add .
	git commit -am $args[0]
	git push origin gh-pages
}
function add {
	git add .
}
function log {
	git log -15 --format="%Cgreen%cn / %s%n%ai / %h"
}
function push {
	param($branch, $remote);
	if(!$remote) {
		$remote = "origin"
	}
	if(!$branch) {
		echo "Format: push [branch] [remote=origin]"
	} else {
		git push $remote $branch
	}
}

# ************************************************** projects
function projects {
	goTo d:\work
}

# ************************************************** nodejs
function shownodes {
	wmic path win32_process get 'Commandline,Processid' | grep node
}
# function startauxiliobackend {
# 	echo "Auxilio-backend running"
# 	Start-Job -scriptblock {auxilio-backend}
# }
# function stopauxiliobackend {
# 	echo "Use Get-job to find out the id of the auxilio background job. After that 'Stop-Job [id]' to stop it. You could use also 'Remove-Job [id]' to remove if from the jobs' list."
# }

# ************************************************** mongodb
function mongodb {
	goTo "C:\Program Files (x86)\mongodb\bin"
	.\mongod.exe --dbpath D:\work\_mongodb\data
}

# ************************************************** other

Set-Alias l cls

# startauxiliobackend
projects
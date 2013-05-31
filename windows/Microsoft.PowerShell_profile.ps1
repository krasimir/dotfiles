# http://krasimirtsonev.com/blog/article/Git-under-windows-console-mode-helpful-tips

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

# ************************************************** other

Set-Alias l cls
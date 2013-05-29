# How to manage the profile file -> http://technet.microsoft.com/en-us/library/ee176913.aspx
# Create 'WindowsPowerShell' in C:\Users\<username>\Documents\ and put the file there 

function goToProjects {
	set-location d:\work
}
function s {
	git status
}
function ci {
	git commit -am $args[0]
}

Set-Alias projects goToProjects
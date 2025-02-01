if [ -z "$1" ]; then
    post="$HOME/Documents/blog/posts/wip/$(date '+%d-%m-%Y').html" 
else
    post="$HOME/Documents/blog/posts/wip/$1.html"
fi

cp "$HOME/Documents/blog/assets/post-template.html" "$post" && nvim "$post"

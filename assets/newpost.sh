if [ -z "$1" ]; then
    post="$HOME/Documents/site/blog/posts/wip/$(date '+%d-%m-%Y').html" 
else
    post="$HOME/Documents/site/blog/posts/wip/$1.html"
fi

cp "$HOME/Documents/site/assets/blog-template.html" "$post" && nvim "$post"

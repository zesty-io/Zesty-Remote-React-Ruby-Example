# Zesty React Ruby Example

## What is this?

This is an example project that demonstrates how to use React with Ruby to load data from a Zesty.io instance. This repository is merely a modified version of [this React Ruby CRUD Example](https://github.com/nothingisfunny/fruits-crud-react-rails-app). 

Files to note (they pull data from Zesty.io, using an example Zesty instance, [Zesty Burger](http://burger.zesty.site))

	app/assets/javascripts/components/_menu.js.jsx
	app/assets/javascripts/components/_home.js.jsx
	
## How do I run the demo on my system?

You'll want Ruby version 2.4.4 or higher. I suggest using [`rvm`](https://rvm.io).

	bundle install
	rails g react:install
	rails s

# Title: 		File management for Jekyll.
# Github: 		https://github.com/x43x61x69/jekyll-files
# Author: 		Zhi-Wei Cai http://vox.vg
# Description: 	Output relative path strings and other info regarding specific assets.
#
# Syntax {% file [file-entry-name] %} or {% file [file-entry-name] [option] %}
#
# Examples:
# {% file file-a %}
# {% file file-a md5 %}
#
# Output:
# /files/a.zip
# a55b65c475f3d83888dce9a2b719b763
#

module Jekyll
	class RenderFile < Liquid::Tag
		def initialize(tag_name, input, tokens)
			super
			@options = input.split(' ')
		end

		def render(context)
      		site	= context.registers[:site]
			prefix 	= site.config['files']
			name 	= @options[0]
			option 	= @options[1]
			if option != nil
				item 	= site.data['files'][name][option]
				prefix 	= ""
			else
				item 	= site.data['files'][name]['link']
			end
			"#{prefix}#{item}"
		end
	end
end

Liquid::Template.register_tag('file', Jekyll::RenderFile)
#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
from os.path import expanduser
import string

AUTHOR = u'Lukas Woodtli'
AUTHORS = AUTHOR


SITENAME = u'Lukas Woodtli'
SITEURL = 'http://lukaswoodtli.github.io'

LOAD_CONTENT_CACHE = False # Caching not helpful when developing
DELETE_OUTPUT_DIRECTORY = True

PATH = 'content'
STATIC_PATHS = ['images']

TIMEZONE = 'Europe/Zurich'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None



DEFAULT_PAGINATION = 2

SLUG_SUBSTITUTIONS = [(' ', '_'), ('+', 'p')]


CATEGORY_URL = 'category/{slug}.html' 	  # The URL to use for a category.
CATEGORY_SAVE_AS = 'category/{slug}.html' # The location to save a category.
TAG_URL = 'tag/{slug}.html' 	          # The URL to use for a tag.
TAG_SAVE_AS = 'tag/{slug}.html' 	  # The location to save the tag page.
AUTHOR_URL = ''                 	  # The URL to use for an author.
AUTHOR_SAVE_AS = ''              	  # The location to save an author.

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

home = expanduser("~")
PLUGIN_PATHS = ["plugins", home]
PLUGINS = ["pelican-bootstrapify"]


THEME = "pelican-chameleon"
BS3_THEME = "http://bootswatch.com/yeti/bootstrap.min.css"

# Keep the generated blog index but save it under different name
INDEX_SAVE_AS = 'blog_index.html'

MENUITEMS = [
    ('Home', '/index.html'),
    ('CV', '/pages/cv.html'),
    ('Skills',[
        ('Hard Skills', '/pages/skills.html'),
        ('Courses', '/pages/courses.html'),
        ('Books', '/pages/books.html'),
        ('Projects', '/pages/projects.html')]),
#    ('Blog', [
#         ('Tags', '/tags.html'),
#         ('Categories', '/categories.html'),
#         ('Chronological', '/archives.html')]),
    ('Contact', '/pages/contact.html')
    ]

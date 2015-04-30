#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
from os.path import expanduser
import string

AUTHOR = u'Lukas Woodtli'
AUTHORS = AUTHOR

AUTHOR_URL = 'author/lukas_woodtli'
AUTHOR_SAVE_AS = 'author/lukas_woodtli.html'

SITENAME = u'Lukas Woodtli'
SITEURL = 'http://lukaswoodtli.github.io'

# can be useful in development, but set to False when you're ready to publish
#RELATIVE_URLS = True

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

upper_to_lower = zip(list(string.ascii_uppercase), list(string.ascii_lowercase)) # [('A', 'a'), ... ('Z', 'z')]
SLUG_SUBSTITUTIONS = [(' ', '_'), ('+', 'p')]
SLUG_SUBSTITUTIONS.extend(upper_to_lower)

CATEGORY_URL = 'category/{slug}.html'
TAG_URL = 'tag/{slug}.html'


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

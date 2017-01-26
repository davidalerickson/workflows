$ = require 'jquery'

do fill = (item = 'RIP Mary Tyler Moore') ->
  $('.tagline').append "#{item}"
fill

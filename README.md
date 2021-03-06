# Middleman Template

[![deps][deps]][deps-url]

## Branches

| Branches | Description |
|:---------|:------------|
| master   | Static files build from 'source' branch by [middleman](http://middlemanapp.com/jp/) gem. |
| source   | Source files [default branch] |

## Development

***Install [bundler](http://bundler.io/) gem at first***

```
gem install bundler
```

### Get to start

checkout `source` branch


***Install bundles***

```
git submodule init
git submodule update

bundle install --path=vendor/bundle --binstubs=vendor/bin

npm install
```

### Middleman commands

You can leave out `bundle exec` if you have added `./vendor/bin` to your $PATH in shell.

***Develop***

```
bundle exec middleman
```

Then you can preview site on [http://0.0.0.0:4567](http://0.0.0.0:4567)

Modify files under `source` directory.


***Build***

Build files in `source` to `build` dirctory

```
bundle exec middleman build
```

***Deploy***

Build files to `build` dirctory, and auto commit these files to specific branch (configured in config.rb).

```
bundle exec middleman deploy
```

[deps]: https://img.shields.io/david/naokazuterada/middleman-template.svg
[deps-url]: https://david-dm.org/naokazuterada/middleman-template

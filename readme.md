# RockPaperScissors Cake~
RPScake is a simple implementation of the Rock Paper Scissors game in vanilla javascript. To execute please clone the repository and execute the `index.html` file.

To run test suite please use mocha+chai suite.

```
$ cd tests_mocha
$ npm install
```

Then access the "test_runner.html" file inside tests_mocha folder.

---

### About the development

The project is written with Javascript, HTML and CSS, without any libs (except for testing). The code is divided in an MVC style where the html files serve only as entry points and basic structure. There is no business logic in them.

**models.js**: describe all models used throughout the application. Since most models were simple containers I decided to store them in the same file.

***_controller.js**: define "actions" that can be performed in the game and will have effects over the models.

***_view.js**: define view logic, binding input actions to controllers.

Additionally I added an `init.js` file which sets up the game state and loads data configuration from `data.js`

Considering the simple requirements of the project I tried to keep everything as simple as possible, while still organizing the logic where it belongs.

Tests should cover all "public" actions from controllers and models which contain logic.

### Additional details

To validate the game works with different sets of data feel free to edit/comment/uncomment the `data/data.js` file.

Also, the images were copied from this [link](http://www.thinkgeek.com/images/products/additional/large/b597_rock_papaer_scissors_lizard_spock_dd.jpg)

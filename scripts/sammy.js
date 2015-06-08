var nodes = document.querySelectorAll('[data-fitter-happier-text]');
    fitterHappierText(nodes, { baseline: 10 });




var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("day").innerHTML = days[d.getDay()];



var d = new Date()
var day=d.getDate()
var month=d.getMonth() + 1
var year=d.getFullYear()



document.getElementById("date").innerHTML = month + "-" + day + "-" + year;





    (function () {
    window.signature = {
        initialize: function () {
            return $('.signature svg').each(function () {
                var delay, i, len, length, path, paths, previousStrokeLength, results, speed;
                paths = $('path, circle, rect', this);
                delay = 0;
                results = [];
                for (i = 0, len = paths.length; i < len; i++) {
                    path = paths[i];
                    length = path.getTotalLength();
                    previousStrokeLength = speed || 0;
                    speed = length < 100 ? 20 : Math.floor(length);
                    delay += previousStrokeLength + 100;
                    results.push($(path).css('transition', 'none').attr('data-length', length).attr('data-speed', speed).attr('data-delay', delay).attr('stroke-dashoffset', length).attr('stroke-dasharray', length + ',' + length));
                }
                return results;
            });
        },
        animate: function () {
            return $('.signature svg').each(function () {
                var delay, i, len, length, path, paths, results, speed;
                paths = $('path, circle, rect', this);
                results = [];
                for (i = 0, len = paths.length; i < len; i++) {
                    path = paths[i];
                    length = $(path).attr('data-length');
                    speed = $(path).attr('data-speed');
                    delay = $(path).attr('data-delay');
                    results.push($(path).css('transition', 'stroke-dashoffset ' + speed + 'ms ' + delay + 'ms linear').attr('stroke-dashoffset', '0'));
                }
                return results;
            });
        }
    };
    $(document).ready(function () {
        window.signature.initialize();
        return $('.signature').on('click', function () {
            window.signature.initialize();
            return setTimeout(function () {
                return window.signature.animate();
            }, 100);
        });
    });
    $(window).load(function () {
        return window.signature.animate();
    });
}.call(this));
    




$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
  

 

  
  var hour = moment().hour();
  var skull = document.querySelector('.js-skull');
  var dark = false;
  document.body.style.transition = 'background .2s ease-out';
  function toggleTheme() {
    if (dark) {
      document.body.classList.add('bg-dark', 'dark');
    } else {
      document.body.classList.remove('bg-dark', 'dark');
    }
  }
  if (hour > 18 || hour < 7) {
    dark = true;
    toggleTheme();
  }
  skull.addEventListener('click', function() {
    dark = !dark;
    toggleTheme();
  });
 


        

        var inputReady = true;
var input = $('.terminal-input');
input.focus();
$('.t-container').on('click', function(e){
  input.focus();
});

input.on('keyup', function(e){
  $('.new-output').text(input.val());
  // console.log(inputReady);
});

$('.t-form').on('submit', function(e){
  e.preventDefault();
  var val = $(this).children($('.terminal-input')).val().toLowerCase();
  var href;

   if (val === '1'){
    window.open("http://thebestisyettoco.me");
  }if (val === '2'){
    window.open("http://700apps.xyz");
  }else {
    resetForm();
  }
});

function resetForm(withKittens){
  var message = "Thanks. "
  var input = $('.terminal-input');

  if (withKittens){
    $('.kittens').removeClass('kittens');
    message = "Mua."
  }

  $('.new-output').removeClass('new-output');
  input.val('');
  $('.terminal').append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');

  $('.new-output').velocity(
    'scroll'
  ), {duration: 100}
}

  function showKittens(){
    $('.terminal').append("<div class='kittens'>"+
                 "<p class='prompt'>Thank You. U r so smart!                                                               </p></div>");

    
    var lines = $('.kittens p');
    $.each(lines, function(index, line){
      setTimeout(function(){
        $(line).css({
          "opacity": 1
        });

        textEffect($(line))
      }, index * 100);
    });

    $('.new-output').velocity(
      'scroll'
    ), {duration: 100}

    setTimeout(function(){
      var gif;

      $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kittens', function(result){
        gif = result.data.image_url;
        $('.terminal').append('<img class="kitten-gif" src="http://img-storage.qiniudn.com/15-5-4/14880428.jpg">');
        resetForm(true);
      });
    }, (lines.length * 100) + 1000);
  }

  function textEffect(line){
    var alpha = [';', '.', ',', ':', ';', '~', '`'];
    var animationSpeed = 10;
    var index = 0;
    var string = line.text();
    var splitString = string.split("");
    var copyString = splitString.slice(0);

    var emptyString = copyString.map(function(el){
        return [alpha[Math.floor(Math.random() * (alpha.length))], index++];
    })

    emptyString = shuffle(emptyString);

    $.each(copyString, function(i, el){
        var newChar = emptyString[i];
        toUnderscore(copyString, line, newChar);

        setTimeout(function(){
          fromUnderscore(copyString, splitString, newChar, line);
        },i * animationSpeed);
      })
  }

  function toUnderscore(copyString, line, newChar){
    copyString[newChar[1]] = newChar[0];
    line.text(copyString.join(''));
  }

  function fromUnderscore(copyString, splitString, newChar, line){
    copyString[newChar[1]] = splitString[newChar[1]];
    line.text(copyString.join(""));
  }


  function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };

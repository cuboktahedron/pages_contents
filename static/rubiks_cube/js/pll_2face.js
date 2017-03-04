$(function() {
  'use strict';

  var D = {};
  D.params = {
    width: 320,
    height: 320,
    backgroundColor: 0x404040,
  };

  var analyzeUrlParameters = function() {
    var params = {};
    var pair;
    var urlParams = decodeURI(location.search).substring(1).split('&');
    var i;
    for(i = 0; i < urlParams.length; i++) {
      pair = urlParams[i].split('=');
      params[pair[0]] = pair[1];
    }

    return $.extend({}, {
      x: -50,
      y: 30,
      z: -50,
      zoom: 100,
    }, params);
  };

  var initScene = function() {
    var scene;
    var light;
    var camera;
    var renderer;

    scene = new THREE.Scene();

    // light
    light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    // camera
    camera = new THREE.PerspectiveCamera(45, D.params.width / D.params.height, 1, 1000);
    camera.position.set(D.initialParams.x, D.initialParams.y, D.initialParams.z);
    camera.lookAt({x:0, y:0, z:0});

    //renderer
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true,
    });
    renderer.setSize(D.params.width, D.params.height);
    renderer.setClearColor(D.params.backgroundColor);
    renderer.setPixelRatio(window.devicePixelRatio);

    $('#stage').append(renderer.domElement);

    D.scene = scene;
    D.camera = camera;
    D.light = light;
    D.renderer = renderer;
  }

  var rotateForSetup = function(mark) {
    var cubeNos = C.cubeDefs.cubeNos;
    var rotDef = C.cubeDefs.rotDefs[mark];
    $.each(cubeNos[mark], function(j, cubeNo) {
      var z = cubeNo % 3;
      var y = parseInt(cubeNo / 3) % 3;
      var x = parseInt(cubeNo / 9);
      var cube = C.cube.cubes[x][y][z];
      var rotation = new THREE.Matrix4().makeRotationAxis(rotDef, Math.PI / 2);
      cube.applyMatrix(rotation);
    });

    C.cube.rotate(mark);
  }

  var setup = function() {
  };

  var resetCubes = function() {
    var colors = C.cubeDefs.colors;

    var x, y, z, i;
    var cube;
    var cubes = [];
    var size = 10;
    var materials;

    rotateStack = [];
    currentRot = null;
    rest = 0;

    for (x = 0; x < 3; x++) {
      cubes[x] = []
        for (y = 0; y < 3; y++) {
          cubes[x][y] = [];
          for (z = 0; z < 3; z++) {
            materials = [];

            for (i = 0; i < 6; i++) {
              materials.push(new THREE.MeshLambertMaterial({ color: colors[C.cubeDefs.origin[x][y][z][i]]}));
            }

            cube = new THREE.Mesh(
                new THREE.BoxGeometry(size, size, size),
                new THREE.MultiMaterial(materials)
                );

            cube.position.set(
                (x - 1) * (size + 1),
                (y - 1) * (size + 1),
                (z - 1) * (size + 1)
                );

            D.scene.add(cube);
            cubes[x][y][z] = cube;
          }
        }
    }

    return cubes;
  }

  var action = function() {
    var cubeNos = C.cubeDefs.cubeNos;
    var i;
    var rot;

    if (rotateStack.length === 0) {
      return;
    }

    $.each(rotateStack, function(i, rot) {
      var rotDef = C.cubeDefs.rotDefs[rot];
      $.each(cubeNos[rot], function(j, cubeNo) {
        var z = cubeNo % 3;
        var y = parseInt(cubeNo / 3) % 3;
        var x = parseInt(cubeNo / 9);
        var cube = C.cube.cubes[x][y][z];
        var rotation = new THREE.Matrix4().makeRotationAxis(rotDef, angularVelocity);
        cube.applyMatrix(rotation);
      });

      C.cube.rotate(rot);
    });

    rotateStack.clear();
  }

  var render = function() {
    requestAnimationFrame(render);
    D.renderer.render(D.scene, D.camera);
  }

  D.initialParams = analyzeUrlParameters();

  var rotateStack = [];
  var currentRot;
  var rest;
  var velocity = D.initialParams.velocity;
  var angularVelocity = Math.PI / 2;

  initScene();
  C.cube.setCubes(resetCubes());
  velocity = D.initialParams.velocity;
  render();

  $('#btn-create-image').click(function() {
//    var canvas = $('#stage canvas')[0];
//    var imageData = canvas.toDataURL('image/png');
//    $('#img-capture').attr('src', imageData);
    var stepss = [
      "L'UL'U'L'U'L'ULUL2",
      "RU'RURURU'R'U'R2",
      "(r')RU'RD2R'URD2R2(r)",
      "R'2(r)U2R'D'RU'2(f')U'RU'(f)(r')",
      "UR'U'RU'RURU'R'URUR2U'R'U",
      "M'2UM'2U2M'2UM'2",
      "(r')RU'R'DRUR'D2L'ULUw(u')L'U'L(r)",
      "RUR'U'R'FR2U'R'U'RUR'F'",
      "R'UR'U'(u)(r2)R'UR'U'R2(u)(r)R'U'RUR(r)",
      "U'R'URU'R'2F'(f)R'FRD(f')(r)UR'U'R2(r')",
      "R'U2RU'2R'FRUR'U'R'F'R2U'",
      "F'R'U'RF'R'U(u')R'U'R'URBR2(u)",
      "RUR'F'RUR'U'R'FR2U'R'U'",
      "R'U'RBR'U'RU(r')RU'R'2FRF(r)",
      "(r')R'2FwR2U'RU(r')RU'(u)(r)R'UFU'R'(r)",
      "(r')(u')URU'(u)(r)R2Uw'RU'R'UR'UwR2",
      "R2Uw'RU'RUR'UwR'2(u)RU'R'(u')",
      "Rw2U(r')(u)U'RU'R'URw'U2B'RB(f')",
      "R'U'(u)FR2UwR'URU'RUw'R'2(u')",
      "(f)U'RD'R2UR'DU'RD'R2UR'DR(f')",
      "LU'RU'2L'UR'LU'RU'2L'UR'U'",
    ];

    var i;
    var promise = $.Deferred().resolve().promise();
    for (i = 0; i < stepss.length; i++) {

      promise = promise.then(
        (function(number) {
          var steps = stepss[number];

          return function() {
            var d = $.Deferred();
            a(d, steps);
            return d.promise();
          };
        })(i)
      ).then(
        (function(number) {
          var steps = stepss[number];

          return function() {
            var d = $.Deferred();
            b(d, steps);
            return d.promise();
          };
        })(i)
      );
    }
  });

  var a = function(d, steps) {
    var $perms = $('#perms');
    var canvas = $('#stage canvas')[0];
    var imageData;

    C.cube.setup(steps, rotateForSetup);
    setTimeout(function() {
      var imageData = canvas.toDataURL('image/png');
      var $img = $('<img>').attr('src', imageData);
      var $n = $('<div class="cf">');
      $n.append($img);
      $perms.append($n);
      d.resolve();
    }, 100);
  }

  var b = function(d, steps) {
    var rsteps = C.cube.reverseScrambleMarks(steps);
    console.log(steps + ' :  ' + rsteps);
    C.cube.setup(rsteps, rotateForSetup);
    setTimeout(function() {
      d.resolve();
    }, 100);
  }

  var reverseSetup = function(scramble) {
    var r = /[UDRLFB]w'?2?|[xyz]'?2?|\(([urf]'?2?)\)/g;
    var mark;
    var rotTable = [];
    var m;
    rotTable["Uw"] = "y";
    rotTable["Dw"] = "y'";
    rotTable["Rw"] = "x";
    rotTable["Lw"] = "x'";
    rotTable["Fw"] = "z";
    rotTable["Bw"] = "z'";
    rotTable["u"]  = "y";
    rotTable["r"]  = "x";
    rotTable["f"]  = "z";
    rotTable["x"]  = rotTable["r"];
    rotTable["y"]  = rotTable["u"];
    rotTable["z"]  = rotTable["f"];

    for (var mark in rotTable) {
      if(rotTable[mark].indexOf("'") !== -1) {
        rotTable[mark + "'"] = rotTable[mark].replace("'", "");
      } else {
        rotTable[mark + "'"] = rotTable[mark] + "'";
      }
      rotTable[mark + "2"] = rotTable[mark] + "2";
      rotTable[mark + "'2"] = rotTable[mark] + "'2";
    }

    var headSetup = "";
    while ((m = r.exec(scramble)) != null) {
      if (m[1] == null) {
        mark = m[0];
      } else {
        mark = m[1];
      }

      headSetup += rotTable[mark];
    }

    return headSetup;
  };
});


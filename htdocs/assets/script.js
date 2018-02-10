$.getJSON( "data.json", function( data ) { 
		var json = data.section;
		var destaques = "";
		var brasil = "";
		var mundo = "";
		var advertising = '<div class="border-top"><div class="advertising">Adversiting</div></div>';
		var maisBrasil = '<div class="row"> <div class="mais-materias col-lg-12"> BRASIL +</div></div>';
		var maisMundo = '<div class="row"> <div class="mais-materias col-lg-12"> MUNDO +</div></div>';
		for (var i = 0; i < json.length; i++) {
			var json0 = json[0].data;
			for (var i = 0; i < 2; i++) {
				destaques += '<article class="container col-lg-6 col-md-6 col-sm-6">';
				destaques += '<img class="destaque" src="assets/media/'+json0[i].image+'">';
				destaques += '<span class="fa fa-share-square icone-materia"></span>';
				destaques += '<div class="hidden-xs principal">';
				destaques += '<div class="categoria">'+json0[i].label+'</div>';
				destaques += '<div class="titulo">'+json0[i].title+'</div>';
				destaques += '<div>'+json0[i].description+'</div>';
				destaques += '</div>';
				destaques += '<div class="container-interno visible-xs">';
				destaques += '<div class="categoria">'+json0[i].label+'</div>';
				destaques += '<div class="titulo">'+json0[i].title+'</div>';
				destaques += '<div>'+json0[i].description+'</div>';
				destaques += '</div>';
				destaques += '</article>';
			}
			for (var i = 2; i < 4; i++) {
				destaques += '<article class="container col-lg-6 col-md-6 col-sm-6 col-xs-12">';
				destaques += '<div class="row hidden-xs">';
				destaques += '<img class="col-lg-6 col-md-6 col-sm-6 secundario" src="assets/media/'+json0[i].image+'">';
				destaques += '<div class="col-lg-6 col-md-6 col-sm-6 secundario" style="padding-left: 0px;">';
				destaques += '<div class="categoria-secundario">'+json0[i].label+'</div>';
				destaques += '<div class="titulo">'+json0[i].title+'</div><br>';
				destaques += '<div>'+json0[i].description+'</div>';
				destaques += '</div>';
				destaques += '<span class="fa fa-share-square icone-secundario"></span>';
				destaques += '</div>';
				destaques += '<div class="row container-interno visible-xs border-top">';
				destaques += '<div class="col-xs-5">';
				destaques += '<img style="width: 100%;" src="assets/media/'+json0[i].image+'">';
				destaques += '<span class="fa fa-share-square icone-secundario"></span>';
				destaques += '</div>';
				destaques += '<div class="col-xs-7">';
				destaques += '<div class="categoria-secundario">'+json0[i].label+'</div>';
				destaques += '<div class="titulo">'+json0[i].title+'</div>';
				destaques += '<div>'+json0[i].description+'</div>';
				destaques += '</div>';
				destaques += '</div>';
				destaques += '</article>';
			}
			for (var i = 4; i < json0.length; i++) {
				destaques += '<article class="container col-lg-3 col-md-3 col-sm-3 hidden-xs">';
				destaques += '<img class="widget" src="assets/media/'+json0[i].image+'">';
				destaques += '<div class="categoria-secundario">'+json0[i].label+'</div>';
				destaques += '<div class="titulo">'+json0[i].title+'</div>';
				destaques += '<div>'+json0[i].description+'</div>';
				destaques += '<span class="fa fa-share-square icone-widget"></span>';
				destaques += '</article>';
				if(i == 7){
					destaques += '<article class="border-top border-bottom container-interno visible-xs col-xs-12">';
				} else {
					destaques += '<article class="border-top container-interno visible-xs col-xs-12">';
				}
				destaques += '<div class="row">';
				destaques += '<div class="col-xs-6">';
				destaques += '<img style="width: 100%;" src="assets/media/'+json0[i].image+'">';
				destaques += '</div>';
				destaques += '<div class="col-xs-6">';
				destaques += '<div class="categoria-secundario">'+json0[i].label+'</div>';
				destaques += '<div class="titulo-widget">'+json0[i].title+'</div>';
				destaques += '</div>';
				destaques += '</div>';
				destaques += '<div class="row">';
				destaques += '<div class="col-xs-10">';
				destaques += '<div class="description-widget">'+json0[i].description+'</div>';
				destaques += '</div>';
				destaques += '<div class="col-xs-2" style="margin-top: 3%;">';
				destaques += '<span class="fa fa-share-square"></span>';
				destaques += '</div>';
				destaques += '</div>';
				destaques += '</article>';
			}

			var json1 = json[1].data;
			for (var i = 0; i < 4; i++) {
				brasil += '<article class="container col-lg-3 col-md-3 col-sm-3 hidden-xs">';
				if(i == 0){
					brasil += '<span style="color: #2d6478; font-weight: 700;">BRASIL</span>';
				}else{
					brasil += '<br>';
				}
				brasil += '<img class="widget" src="assets/media/'+json1[i].image+'">';
				brasil += '<div class="categoria-secundario">'+json1[i].label+'</div>';
				brasil += '<div class="titulo">'+json1[i].title+'</div>';
				brasil += '<div>'+json1[i].description+'</div>';
				brasil += '<span class="fa fa-share-square"></span>';
				brasil += '</article>';
				if(i == 3){
					brasil += '<article class="border-top border-bottom container-interno visible-xs col-xs-12">';
				} else {
					brasil += '<article class="border-top container-interno visible-xs col-xs-12">';
				}
				if(i == 0){
					brasil += '<span style="color: #2d6478; font-weight: 700; margin-left: 4%; font-size: 22px;">BRASIL</span>';
				}else{
					brasil += '<br>';
				}
				brasil += '<div class="row">';
				brasil += '<div class="col-xs-6">';
				brasil += '<img style="width: 100%;" src="assets/media/'+json1[i].image+'">';
				brasil += '</div>';
				brasil += '<div class="col-xs-6">';
				brasil += '<div class="categoria-secundario">'+json1[i].label+'</div>';
				brasil += '<div class="titulo-widget">'+json1[i].title+'</div>';
				brasil += '</div>';
				brasil += '</div>';
				brasil += '<div class="row">';
				brasil += '<div class="col-xs-10">';
				brasil += '<div class="description-widget">'+json1[i].description+'</div>';
				brasil += '</div>';
				brasil += '<div class="col-xs-2" style="margin-top: 3%;">';
				brasil += '<span class="fa fa-share-square"></span>';
				brasil += '</div>';
				brasil += '</div>';
				brasil += '</article>';
			}

			var json2 = json[2].data;
			for (var i = 0; i < 4; i++) {
				mundo += '<article class="container col-lg-3 col-md-3 col-sm-3 hidden-xs">';
				if(i == 0){
					mundo += '<span style="color: #2d6478; font-weight: 700;">MUNDO</span>';
				}else{
					mundo += '<br>';
				}
				mundo += '<img class="widget" src="assets/media/'+json2[i].image+'">';
				mundo += '<div class="categoria-secundario">'+json2[i].label+'</div>';
				mundo += '<div class="titulo">'+json2[i].title+'</div>';
				mundo += '<div>'+json2[i].description+'</div>';
				mundo += '<span class="fa fa-share-square"></span> </article>';
				if(i == 3){
					mundo += '<article class="border-bottom container-interno visible-xs col-xs-12">';
				} else {
					mundo += '<article class="border-top container-interno visible-xs col-xs-12">';
				}
				if(i == 0){
					mundo += '<span style="color: #2d6478; font-weight: 700; margin-left: 4%; font-size: 22px;">MUNDO</span>';
				}else{
					mundo += '<br>';
				}
				mundo += '<div class="row">';
				mundo += '<div class="col-xs-6">';
				mundo += '<img style="width: 100%;" src="assets/media/'+json2[i].image+'">';
				mundo += '</div>';
				mundo += '<div class="col-xs-6">';
				mundo += '<div class="categoria-secundario">'+json2[i].label+'</div>';
				mundo += '<div class="titulo-widget">'+json2[i].title+'</div>';
				mundo += '</div>';
				mundo += '</div>';
				mundo += '<div class="row">';
				mundo += '<div class="col-xs-10">';
				mundo += '<div class="description-widget">'+json2[i].description+'</div>';
				mundo += '</div>';
				mundo += '<div class="col-xs-2" style="margin-top: 3%;">';
				mundo += '<span class="fa fa-share-square"></span>';
				mundo += '</div>';
				mundo += '</div>';
				mundo += '</article>';
			}

			document.getElementById("artigos").innerHTML = destaques + advertising + brasil + maisBrasil + mundo + maisMundo;
		}
	},
	function(xhr) {
		console.error(xhr);
	}
);
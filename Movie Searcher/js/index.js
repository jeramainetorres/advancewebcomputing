$(document).ready(function(){
	$('#searchMovie').click(function()
	{
				
		var searchMovie = $('#movieName').val();
		if(searchMovie == "")
		{
			alert("Enter a word or phrase to search on.");
		}
		
		$(function(){
			
			/*var movie = document.getElementById('movie');
			var valmovie = movie.value;*/
			
			$('#searchResult').html("");
			$('#searchResult').append('<p class="text-info">Search Result for: ' +searchMovie+ '</p>');
			var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
			$.ajax({
				url: url,
				data: {
					q: searchMovie,
					apiKey: 'hcrurhsttexasrgfm2y6yahm'
				},
					dataType: 'jsonp',
					success: showMovies
			});
		
		function showMovies(response)
		{
				//console.log(response);
				$('.resultContainer').html("");
				
				var movieNum = response.movies.length;
					$('#resultNumber').html("");
					$('#resultNumber').append('<p class="text-info">Result/s found: '+movieNum+'</p>');
					
				for(i=0;i<response.movies.length;i++)
				{
					var movie = response.movies[i];
					var movieSynopsis = movie.synopsis;
					
					if(movieSynopsis == "")
						{
							movieSynopsis = '<h3 style="text-align: center;">No Available Synopsis</h3>';
							$('.resultContainer').append('<div class="resultDescription">'+'<div class="resultThumbnail">'+'<img src="' +movie.posters.thumbnail+'"/>'+'</div>'+'<div class="title">'+'<p class="movie_title">' +movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+movieSynopsis+'</p>'+'</div>'+'</div>'+'<div class="year">'+'<p>Year: ' +movie.year+ '</p>'+'</div>'+'</div>'+'<div class="clear">'+'</div>');
						}
					else
						{
							$('.resultContainer').append('<div class="resultDescription">'+'<div class="resultThumbnail">'+'<img src="' +movie.posters.thumbnail+'"/>'+'</div>'+'<div class="title">'+'<p class="movie_title">' +movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+movieSynopsis+'</p>'+'</div>'+'</div>'+'<div class="year">'+'<p>Year: ' +movie.year+ '</p>'+'</div>'+'</div>'+'<div class="clear">'+'</div>');
						
							/*$('.resultContainer').append('<h3>' +movie.title+ '</h3>');
							$('.resultContainer').append('<img src="' +movie.posters.thumbnail+'"/>');
							$('.resultContainer').append('<h3>' +movie.year+ '</h3>');*/
						}
				}
		}
				
			});
		
		$( '#formSearchmovie' ).each(function()
		{
			this.reset();
		});
		
	});
});


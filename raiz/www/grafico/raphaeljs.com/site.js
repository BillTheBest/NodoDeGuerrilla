(function(b){var m=document,g="getElementById",p="getElementsByTagName",h=m[g]("quotes");if(h){window.twitterQuotes=function(u){function w(s){s=s.replace(/(^|\s)(?:#([\d\w_]+)|@([\d\w_]{1,15}))|(https?:\/\/[^\s"]+[\d\w_\-\/])|([^\s:@"]+@[^\s:@"]*)/gi,function(D,I,G,E,H,t){var F='<a href="mailto:'+t+'">'+t+"</a>";G&&(F=I+'<a href="http://search.twitter.com/search?q=%23'+G+'">#'+G+"</a>");E&&(F=I+'<a href="http://twitter.com/'+E+'">@'+E+"</a>");H&&(F='<a href="'+encodeURI(decodeURI(H.replace(/<[^>]*>/g,"")))+'">'+H+"</a>");return F;});return s;}var l=h[p]("ol")[0],v,r;h.style.display="block";l.innerHTML="";if(u.results){for(var q=0,a=u.results.length;q<a;q++){v=m.createElement("li");r=u.results[q];v.innerHTML='<a href="http://twitter.com/'+r.from_user+'"><img src="'+r.profile_image_url+'" width="16" height="16" alt="avatar" title="@'+r.from_user+'" class="avatar"></a>'+w(r.text);l.appendChild(v);}}};var i=m.createElement("script");i.src="http://search.twitter.com/search.json?callback=twitterQuotes&q=raphaeljs&lang=en&rpp=10";m.body.appendChild(i);}var n={download:"M24.345,13.904c0.019-0.195,0.03-0.392,0.03-0.591c0-3.452-2.798-6.25-6.25-6.25c-2.679,0-4.958,1.689-5.847,4.059c-0.589-0.646-1.429-1.059-2.372-1.059c-1.778,0-3.219,1.441-3.219,3.219c0,0.21,0.023,0.415,0.062,0.613c-2.372,0.391-4.187,2.436-4.187,4.918c0,2.762,2.239,5,5,5h3.404l-0.707-0.707c-0.377-0.377-0.585-0.879-0.585-1.413c0-0.533,0.208-1.035,0.585-1.412l0.556-0.557c0.4-0.399,0.937-0.628,1.471-0.628c0.027,0,0.054,0,0.08,0.002v-0.472c0-1.104,0.898-2.002,2-2.002h3.266c1.103,0,2,0.898,2,2.002v0.472c0.027-0.002,0.054-0.002,0.081-0.002c0.533,0,1.07,0.229,1.47,0.63l0.557,0.552c0.78,0.781,0.78,2.05,0,2.828l-0.706,0.707h2.403c2.762,0,5-2.238,5-5C28.438,16.362,26.672,14.332,24.345,13.904zM21.033,20.986l-0.556-0.555c-0.39-0.389-0.964-0.45-1.276-0.137c-0.312,0.312-0.568,0.118-0.568-0.432v-1.238c0-0.55-0.451-1-1-1h-3.265c-0.55,0-1,0.45-1,1v1.238c0,0.55-0.256,0.744-0.569,0.432c-0.312-0.313-0.887-0.252-1.276,0.137l-0.556,0.555c-0.39,0.389-0.39,1.024-0.001,1.413l4.328,4.331c0.194,0.194,0.451,0.291,0.707,0.291s0.512-0.097,0.707-0.291l4.327-4.331C21.424,22.011,21.423,21.375,21.033,20.986z",documentation:"M26.679,7.858c-0.176-0.138-0.404-0.17-0.606-0.083l-9.66,4.183c-0.42,0.183-0.946,0.271-1.486,0.271c-0.753,0.002-1.532-0.173-2.075-0.412c-0.194-0.083-0.356-0.176-0.471-0.259c0.042-0.021,0.09-0.042,0.146-0.064l8.786-3.804l1.31,0.561V6.612c0-0.244-0.106-0.475-0.283-0.612c-0.176-0.138-0.406-0.17-0.605-0.083l-9.66,4.183c-0.298,0.121-0.554,0.268-0.771,0.483c-0.213,0.208-0.397,0.552-0.394,0.934c0,0.01,0.003,0.027,0.003,0.027v14.73c0,0.006-0.002,0.012-0.002,0.019c0,0.005,0.002,0.007,0.002,0.012v0.015h0.002c0.021,0.515,0.28,0.843,0.528,1.075c0.781,0.688,2.091,1.073,3.484,1.093c0.66,0,1.33-0.1,1.951-0.366l9.662-4.184c0.255-0.109,0.422-0.383,0.422-0.692V8.471C26.961,8.227,26.855,7.996,26.679,7.858zM20.553,5.058c-0.017-0.221-0.108-0.429-0.271-0.556c-0.176-0.138-0.404-0.17-0.606-0.083l-9.66,4.183C9.596,8.784,9.069,8.873,8.53,8.873C7.777,8.874,6.998,8.699,6.455,8.46C6.262,8.378,6.099,8.285,5.984,8.202C6.026,8.181,6.075,8.16,6.13,8.138l8.787-3.804l1.309,0.561V3.256c0-0.244-0.106-0.475-0.283-0.612c-0.176-0.138-0.407-0.17-0.606-0.083l-9.66,4.183C5.379,6.864,5.124,7.011,4.907,7.227C4.693,7.435,4.51,7.779,4.513,8.161c0,0.011,0.003,0.027,0.003,0.027v14.73c0,0.006-0.001,0.013-0.001,0.019c0,0.005,0.001,0.007,0.001,0.012v0.016h0.002c0.021,0.515,0.28,0.843,0.528,1.075c0.781,0.688,2.091,1.072,3.485,1.092c0.376,0,0.754-0.045,1.126-0.122V11.544c-0.01-0.7,0.27-1.372,0.762-1.856c0.319-0.315,0.708-0.564,1.19-0.756L20.553,5.058z",opensource:"M15.5,1.125c-8.222,0-14.911,6.689-14.911,14.911c0,6.262,3.88,11.634,9.362,13.839l3.639-9.076c-1.888-0.758-3.222-2.604-3.222-4.763c0-2.834,2.297-5.132,5.131-5.132s5.131,2.298,5.131,5.132c0,2.158-1.334,4.005-3.222,4.763l3.64,9.076c5.48-2.206,9.361-7.578,9.361-13.839C30.41,7.814,23.721,1.125,15.5,1.125z",donate:"M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466zM17.255,23.88v2.047h-1.958v-2.024c-3.213-0.44-4.621-3.08-4.621-3.08l2.002-1.673c0,0,1.276,2.223,3.586,2.223c1.276,0,2.244-0.683,2.244-1.849c0-2.729-7.349-2.398-7.349-7.459c0-2.2,1.738-3.785,4.137-4.159V5.859h1.958v2.046c1.672,0.22,3.652,1.1,3.652,2.993v1.452h-2.596v-0.704c0-0.726-0.925-1.21-1.959-1.21c-1.32,0-2.288,0.66-2.288,1.584c0,2.794,7.349,2.112,7.349,7.415C21.413,21.614,19.785,23.506,17.255,23.88z","what-is-it":"M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466zM17.328,24.371h-2.707v-2.596h2.707V24.371zM17.328,19.003v0.858h-2.707v-1.057c0-3.19,3.63-3.696,3.63-5.963c0-1.034-0.924-1.826-2.134-1.826c-1.254,0-2.354,0.924-2.354,0.924l-1.541-1.915c0,0,1.519-1.584,4.137-1.584c2.487,0,4.796,1.54,4.796,4.136C21.156,16.208,17.328,16.627,17.328,19.003z",demo:"M23.043,4.649 22.639,2.337 21.049,4.064 18.726,3.735 19.877,5.78 18.845,7.888 21.146,7.425 22.832,9.058 23.103,6.726 25.177,5.627M26.217,18.198 26.035,16.948 25.153,17.854 23.908,17.64 24.496,18.758 23.908,19.876 25.153,19.662 26.035,20.567 26.217,19.317 27.35,18.758M4.92,7.672 5.868,7.3 6.712,7.869 6.65,6.853 7.453,6.226 6.467,5.97 6.118,5.013 5.571,5.872 4.553,5.908 5.201,6.694M10.439,10.505 11.46,9.409 12.941,9.628 12.214,8.319 12.881,6.978 11.411,7.265 10.341,6.216 10.16,7.703 8.832,8.396 10.19,9.028M17.234,12.721c-0.588-0.368-1.172-0.618-1.692-0.729c-0.492-0.089-1.039-0.149-1.425,0.374L2.562,30.788h6.68l9.669-15.416c0.303-0.576,0.012-1.041-0.283-1.447C18.303,13.508,17.822,13.09,17.234,12.721zM13.613,21.936c-0.254-0.396-0.74-0.857-1.373-1.254c-0.632-0.396-1.258-0.634-1.726-0.69l4.421-7.052c0.064-0.013,0.262-0.021,0.543,0.066c0.346,0.092,0.785,0.285,1.225,0.562c0.504,0.313,0.908,0.677,1.133,0.97c0.113,0.145,0.178,0.271,0.195,0.335c0.002,0.006,0.004,0.011,0.004,0.015L13.613,21.936z","how-to-use-it":"M26.834,14.693c1.816-2.088,2.181-4.938,1.193-7.334l-3.646,4.252l-3.594-0.699L19.596,7.45l3.637-4.242c-2.502-0.63-5.258,0.13-7.066,2.21c-1.907,2.193-2.219,5.229-1.039,7.693L5.624,24.04c-1.011,1.162-0.888,2.924,0.274,3.935c1.162,1.01,2.924,0.888,3.935-0.274l9.493-10.918C21.939,17.625,24.918,16.896,26.834,14.693z",github:"M23.356,17.485c-0.004,0.007-0.007,0.013-0.01,0.021l0.162,0.005c0.107,0.004,0.218,0.01,0.33,0.016c-0.046-0.004-0.09-0.009-0.136-0.013L23.356,17.485zM15.5,1.249C7.629,1.25,1.25,7.629,1.249,15.5C1.25,23.371,7.629,29.75,15.5,29.751c7.871-0.001,14.25-6.38,14.251-14.251C29.75,7.629,23.371,1.25,15.5,1.249zM3.771,17.093c0.849-0.092,1.833-0.148,2.791-0.156c0.262,0,0.507-0.006,0.717-0.012c0.063,0.213,0.136,0.419,0.219,0.613H7.492c-0.918,0.031-2.047,0.152-3.134,0.335c-0.138,0.023-0.288,0.051-0.441,0.08C3.857,17.67,3.81,17.383,3.771,17.093zM12.196,22.224c-0.1,0.028-0.224,0.07-0.357,0.117c-0.479,0.169-0.665,0.206-1.15,0.206c-0.502,0.015-0.621-0.019-0.921-0.17C9.33,22.171,8.923,21.8,8.651,21.353c-0.453-0.746-1.236-1.275-1.889-1.275c-0.559,0-0.664,0.227-0.261,0.557c0.608,0.496,1.062,0.998,1.248,1.385c0.105,0.215,0.266,0.546,0.358,0.744c0.099,0.206,0.311,0.474,0.511,0.676c0.472,0.441,0.928,0.659,1.608,0.772c0.455,0.06,0.567,0.06,1.105-0.004c0.26-0.03,0.479-0.067,0.675-0.118v0.771c0,1.049-0.008,1.628-0.031,1.945c-1.852-0.576-3.507-1.595-4.848-2.934c-1.576-1.578-2.706-3.592-3.195-5.848c0.952-0.176,2.073-0.32,3.373-0.43l0.208-0.018c0.398,0.925,1.011,1.631,1.876,2.179c0.53,0.337,1.38,0.685,1.808,0.733c0.118,0.02,0.46,0.09,0.76,0.16c0.302,0.066,0.89,0.172,1.309,0.236h0.009c-0.007,0.018-0.014,0.02-0.022,0.02C12.747,21.169,12.418,21.579,12.196,22.224zM13.732,27.207c-0.168-0.025-0.335-0.056-0.5-0.087c0.024-0.286,0.038-0.785,0.054-1.723c0.028-1.767,0.041-1.94,0.156-2.189c0.069-0.15,0.17-0.32,0.226-0.357c0.095-0.078,0.101,0.076,0.101,2.188C13.769,26.143,13.763,26.786,13.732,27.207zM15.5,27.339c-0.148,0-0.296-0.006-0.443-0.012c0.086-0.562,0.104-1.428,0.106-2.871l0.003-1.82l0.197,0.019l0.199,0.02l0.032,2.365c0.017,1.21,0.027,1.878,0.075,2.296C15.613,27.335,15.558,27.339,15.5,27.339zM17.006,27.24c-0.039-0.485-0.037-1.243-0.027-2.553c0.019-1.866,0.019-1.866,0.131-1.769c0.246,0.246,0.305,0.623,0.305,2.373c0,0.928,0.011,1.497,0.082,1.876C17.334,27.196,17.17,27.22,17.006,27.24zM27.089,17.927c-0.155-0.029-0.307-0.057-0.446-0.08c-0.96-0.162-1.953-0.275-2.804-0.32c1.25,0.108,2.327,0.248,3.246,0.418c-0.479,2.289-1.618,4.33-3.214,5.928c-1.402,1.4-3.15,2.448-5.106,3.008c-0.034-0.335-0.058-1.048-0.066-2.212c-0.03-2.167-0.039-2.263-0.17-2.602c-0.181-0.458-0.47-0.811-0.811-1.055c-0.094-0.057-0.181-0.103-0.301-0.14c0.145-0.02,0.282-0.021,0.427-0.057c1.418-0.188,2.168-0.357,2.772-0.584c1.263-0.492,2.129-1.301,2.606-2.468c0.044-0.103,0.088-0.2,0.123-0.279l0.011,0.001c0.032-0.07,0.057-0.118,0.064-0.125c0.02-0.017,0.036-0.085,0.038-0.151c0-0.037,0.017-0.157,0.041-0.317c0.249,0.01,0.58,0.018,0.938,0.02c0.959,0.008,1.945,0.064,2.794,0.156C27.194,17.356,27.148,17.644,27.089,17.927zM25.823,16.87c-0.697-0.049-1.715-0.064-2.311-0.057c0.02-0.103,0.037-0.218,0.059-0.336c0.083-0.454,0.111-0.912,0.113-1.823c0.002-1.413-0.074-1.801-0.534-2.735c-0.188-0.381-0.399-0.705-0.655-0.998c0.225-0.659,0.207-1.68-0.02-2.575c-0.19-0.734-0.258-0.781-0.924-0.64c-0.563,0.12-1.016,0.283-1.598,0.576c-0.274,0.138-0.652,0.354-0.923,0.522c-0.715-0.251-1.451-0.419-2.242-0.508c-0.799-0.092-2.759-0.04-3.454,0.089c-0.681,0.126-1.293,0.28-1.848,0.462c-0.276-0.171-0.678-0.4-0.964-0.547C9.944,8.008,9.491,7.846,8.925,7.727c-0.664-0.144-0.732-0.095-0.922,0.64c-0.235,0.907-0.237,1.945-0.004,2.603c0.026,0.075,0.043,0.129,0.05,0.17c-0.942,1.187-1.25,2.515-1.046,4.367c0.053,0.482,0.136,0.926,0.251,1.333c-0.602-0.004-1.457,0.018-2.074,0.057c-0.454,0.031-0.957,0.076-1.418,0.129c-0.063-0.5-0.101-1.008-0.101-1.524c0-3.273,1.323-6.225,3.468-8.372c2.146-2.144,5.099-3.467,8.371-3.467c3.273,0,6.226,1.323,8.371,3.467c2.145,2.147,3.468,5.099,3.468,8.372c0,0.508-0.036,1.008-0.098,1.499C26.78,16.946,26.276,16.899,25.823,16.87z",irc:"M15.985,5.972c-7.563,0-13.695,4.077-13.695,9.106c0,2.877,2.013,5.44,5.147,7.108c-0.446,1.479-1.336,3.117-3.056,4.566c0,0,4.015-0.266,6.851-3.143c0.163,0.04,0.332,0.07,0.497,0.107c-0.155-0.462-0.246-0.943-0.246-1.443c0-3.393,3.776-6.05,8.599-6.05c3.464,0,6.379,1.376,7.751,3.406c1.168-1.34,1.847-2.892,1.847-4.552C29.68,10.049,23.548,5.972,15.985,5.972zM27.68,22.274c0-2.79-3.401-5.053-7.599-5.053c-4.196,0-7.599,2.263-7.599,5.053c0,2.791,3.403,5.053,7.599,5.053c0.929,0,1.814-0.116,2.637-0.319c1.573,1.597,3.801,1.744,3.801,1.744c-0.954-0.804-1.447-1.713-1.695-2.534C26.562,25.293,27.68,23.871,27.68,22.274z",graphael:"M28.832,16.104c0-1.477-0.574-2.863-1.617-3.905l-7.002-7.001L20.211,5.2c-1.027-1.03-2.445-1.62-3.9-1.62c-1.455,0-2.871,0.59-3.9,1.621l-0.002-0.002l-7,7c-1.033,1.031-1.619,2.445-1.619,3.905c0,1.458,0.586,2.872,1.619,3.903l6.312,6.312c0.253,0.284,0.519,0.55,0.8,0.794c1.049,0.994,2.463,1.54,3.908,1.51c1.417-0.028,2.783-0.612,3.785-1.615l6.811-6.811c0.018-0.017,0.035-0.034,0.053-0.052l0.137-0.138c0.27-0.268,0.49-0.564,0.713-0.868l-0.002-0.002C28.516,18.244,28.832,17.198,28.832,16.104zM23.08,21.252l-0.051,0.006l-0.955,0.974c0.01,0-3.305,3.332-3.305,3.332c-1.121,1.119-2.906,1.337-4.261,0.511l0.002-0.002c-0.213-0.141-0.414-0.299-0.61-0.467c-0.016-0.015-0.032-0.027-0.047-0.042l-3.024-3.024h-0.001l-3.976-3.976c-1.34-1.339-1.342-3.581,0-4.921l2.689-2.689l0.052-0.005l0.956-0.973c-0.01,0,3.303-3.332,3.303-3.332c1.121-1.12,2.908-1.337,4.261-0.511v0.002c0.211,0.14,0.414,0.299,0.609,0.467c0.016,0.015,0.031,0.028,0.047,0.042l3.025,3.024l0,0l3.975,3.976c0.389,0.388,0.66,0.852,0.824,1.348l-2.617,0.008c-0.537-3.754-3.764-6.64-7.666-6.64c-4.277,0-7.744,3.467-7.745,7.746c0.001,4.277,3.468,7.743,7.745,7.744c3.919-0.001,7.156-2.911,7.671-6.688l2.635-0.009c-0.16,0.52-0.441,1.007-0.846,1.412L23.08,21.252zM16.311,17.184c0.002,0,0.002,0,0.004,0l5.476-0.018c-0.5,2.573-2.76,4.516-5.48,4.52c-3.084-0.005-5.578-2.5-5.584-5.582c0.006-3.084,2.5-5.579,5.584-5.584c2.707,0.005,4.96,1.929,5.472,4.485l-5.476,0.018c-0.596,0.002-1.078,0.488-1.076,1.084C15.233,16.702,15.715,17.184,16.311,17.184z",icons:"M17.078,22.004l-1.758-4.129l-2.007,4.752l-7.519-3.289l0.174,3.905l9.437,4.374l10.909-5.365l-0.149-4.989L17.078,22.004zM29.454,6.619L18.521,3.383l-3.006,2.671l-3.091-2.359L1.546,8.199l3.795,3.048l-3.433,5.302l10.879,4.757l2.53-5.998l2.257,5.308l11.393-5.942l-3.105-4.709L29.454,6.619zM15.277,14.579l-9.059-3.83l9.275-4.101l9.608,3.255L15.277,14.579z",twitter:"M26.492,9.493c-0.771,0.343-1.602,0.574-2.473,0.678c0.89-0.533,1.562-1.376,1.893-2.382c-0.832,0.493-1.753,0.852-2.734,1.044c-0.785-0.837-1.902-1.359-3.142-1.359c-2.377,0-4.306,1.928-4.306,4.306c0,0.337,0.039,0.666,0.112,0.979c-3.578-0.18-6.75-1.894-8.874-4.499c-0.371,0.636-0.583,1.375-0.583,2.165c0,1.494,0.76,2.812,1.915,3.583c-0.706-0.022-1.37-0.216-1.95-0.538c0,0.018,0,0.036,0,0.053c0,2.086,1.484,3.829,3.454,4.222c-0.361,0.099-0.741,0.147-1.134,0.147c-0.278,0-0.547-0.023-0.81-0.076c0.548,1.711,2.138,2.955,4.022,2.99c-1.474,1.146-3.33,1.842-5.347,1.842c-0.348,0-0.69-0.021-1.027-0.062c1.905,1.225,4.168,1.938,6.6,1.938c7.919,0,12.248-6.562,12.248-12.25c0-0.187-0.002-0.372-0.01-0.557C25.186,11.115,25.915,10.356,26.492,9.493","t-shirts":"M20.099,4.039c-0.68,1.677-2.319,2.862-4.239,2.862c-1.921,0-3.56-1.185-4.24-2.862L1.238,8.442l2.921,6.884l3.208-1.361V28h17.099V14.015l3.093,1.312l2.921-6.884L20.099,4.039zM21.828,18.776l-4.552,4.552c-0.781,0.781-2.047,0.781-2.828,0l-4.464-4.463c-0.781-0.781-0.781-2.048,0-2.829l4.552-4.552c0.781-0.781,2.048-0.781,2.829,0l4.464,4.463C22.61,16.729,22.609,17.995,21.828,18.776z",quotes:"M14.505,5.873c-3.937,2.52-5.904,5.556-5.904,9.108c0,1.104,0.192,1.656,0.576,1.656l0.396-0.107c0.312-0.12,0.563-0.18,0.756-0.18c1.128,0,2.07,0.411,2.826,1.229c0.756,0.82,1.134,1.832,1.134,3.037c0,1.157-0.408,2.14-1.224,2.947c-0.816,0.807-1.801,1.211-2.952,1.211c-1.608,0-2.935-0.661-3.979-1.984c-1.044-1.321-1.565-2.98-1.565-4.977c0-2.259,0.443-4.327,1.332-6.203c0.888-1.875,2.243-3.57,4.067-5.085c1.824-1.514,2.988-2.272,3.492-2.272c0.336,0,0.612,0.162,0.828,0.486c0.216,0.324,0.324,0.606,0.324,0.846L14.505,5.873zM27.465,5.873c-3.937,2.52-5.904,5.556-5.904,9.108c0,1.104,0.192,1.656,0.576,1.656l0.396-0.107c0.312-0.12,0.563-0.18,0.756-0.18c1.104,0,2.04,0.411,2.808,1.229c0.769,0.82,1.152,1.832,1.152,3.037c0,1.157-0.408,2.14-1.224,2.947c-0.816,0.807-1.801,1.211-2.952,1.211c-1.608,0-2.935-0.661-3.979-1.984c-1.044-1.321-1.565-2.98-1.565-4.977c0-2.284,0.449-4.369,1.35-6.256c0.9-1.887,2.256-3.577,4.068-5.067c1.812-1.49,2.97-2.236,3.474-2.236c0.336,0,0.612,0.162,0.828,0.486c0.216,0.324,0.324,0.606,0.324,0.846L27.465,5.873z",discuss:"M21.066,20.667c1.227-0.682,1.068-3.311-0.354-5.874c-0.611-1.104-1.359-1.998-2.109-2.623c-0.875,0.641-1.941,1.031-3.102,1.031c-1.164,0-2.231-0.391-3.104-1.031c-0.75,0.625-1.498,1.519-2.111,2.623c-1.422,2.563-1.578,5.192-0.35,5.874c0.549,0.312,1.127,0.078,1.723-0.496c-0.105,0.582-0.166,1.213-0.166,1.873c0,2.938,1.139,5.312,2.543,5.312c0.846,0,1.265-0.865,1.466-2.188c0.2,1.314,0.62,2.188,1.461,2.188c1.396,0,2.545-2.375,2.545-5.312c0-0.66-0.062-1.291-0.168-1.873C19.939,20.745,20.516,20.983,21.066,20.667zM15.5,12.201c2.361,0,4.277-1.916,4.277-4.279S17.861,3.644,15.5,3.644c-2.363,0-4.28,1.916-4.28,4.279S13.137,12.201,15.5,12.201zM24.094,14.914c1.938,0,3.512-1.573,3.512-3.513c0-1.939-1.573-3.513-3.512-3.513c-1.94,0-3.513,1.573-3.513,3.513C20.581,13.341,22.153,14.914,24.094,14.914zM28.374,17.043c-0.502-0.907-1.116-1.641-1.732-2.154c-0.718,0.526-1.594,0.846-2.546,0.846c-0.756,0-1.459-0.207-2.076-0.55c0.496,1.093,0.803,2.2,0.861,3.19c0.093,1.516-0.381,2.641-1.329,3.165c-0.204,0.117-0.426,0.183-0.653,0.224c-0.056,0.392-0.095,0.801-0.095,1.231c0,2.412,0.935,4.361,2.088,4.361c0.694,0,1.039-0.71,1.204-1.796c0.163,1.079,0.508,1.796,1.199,1.796c1.146,0,2.09-1.95,2.09-4.361c0-0.542-0.052-1.06-0.139-1.538c0.492,0.472,0.966,0.667,1.418,0.407C29.671,21.305,29.541,19.146,28.374,17.043zM6.906,14.914c1.939,0,3.512-1.573,3.512-3.513c0-1.939-1.573-3.513-3.512-3.513c-1.94,0-3.514,1.573-3.514,3.513C3.392,13.341,4.966,14.914,6.906,14.914zM9.441,21.536c-1.593-0.885-1.739-3.524-0.457-6.354c-0.619,0.346-1.322,0.553-2.078,0.553c-0.956,0-1.832-0.321-2.549-0.846c-0.616,0.513-1.229,1.247-1.733,2.154c-1.167,2.104-1.295,4.262-0.287,4.821c0.451,0.257,0.925,0.064,1.414-0.407c-0.086,0.479-0.136,0.996-0.136,1.538c0,2.412,0.935,4.361,2.088,4.361c0.694,0,1.039-0.71,1.204-1.796c0.165,1.079,0.509,1.796,1.201,1.796c1.146,0,2.089-1.95,2.089-4.361c0-0.432-0.04-0.841-0.097-1.233C9.874,21.721,9.651,21.656,9.441,21.536z"},e=["M49.973,94.128c-5.212,0-10.113-2.029-13.799-5.717l-24.75-24.75c-3.69-3.685-5.723-8.587-5.723-13.802c0-5.216,2.033-10.119,5.724-13.806l24.75-24.749c3.686-3.687,8.585-5.715,13.798-5.715c5.212,0,10.113,2.028,13.8,5.714l24.749,24.752c3.69,3.683,5.725,8.586,5.725,13.803c0,5.217-2.034,10.119-5.726,13.805L63.772,88.411C60.086,92.099,55.185,94.128,49.973,94.128L49.973,94.128z","M33.014,23.398c0-9.366,7.593-16.959,16.959-16.959c9.367,0,16.959,7.593,16.959,16.959c0,9.367-7.592,16.959-16.959,16.959C40.606,40.358,33.014,32.765,33.014,23.398","M93.816,61.314c2.23-3.371,3.43-7.32,3.43-11.455c0-5.571-2.172-10.806-6.112-14.738L64.707,8.691l-0.01,0.01c-3.771-3.777-8.979-6.117-14.725-6.117S39.019,4.925,35.249,8.702L35.24,8.692L8.813,35.118c-3.941,3.937-6.112,9.172-6.112,14.741c0,5.568,2.17,10.803,6.11,14.737l23.829,23.829c0.955,1.072,1.959,2.075,3.017,2.997c3.885,3.681,8.943,5.705,14.315,5.705c5.565,0,10.799-2.167,14.734-6.104l25.71-25.709c0.065-0.064,0.13-0.13,0.195-0.195l0.521-0.52c0.993-0.991,1.873-2.066,2.635-3.207c0.018-0.025,0.037-0.049,0.056-0.074L93.816,61.314zM89.535,49.859c0,2.592-0.752,5.066-2.144,7.184c-0.835,1.14-1.706,2.136-2.604,2.997l-0.064,0.064c-4.227,4.021-9.003,5.16-13.056,5.16c-2.23,0-4.243-0.346-5.825-0.745c-9.263-2.34-19.332-10.311-23.94-21.936c2.483,1.049,5.21,1.629,8.07,1.629c10.747,0,19.616-8.187,20.702-18.65l15.009,15.008C88.167,43.053,89.535,46.351,89.535,49.859zM49.973,10.294c7.227,0,13.104,5.879,13.104,13.104c0,7.226-5.878,13.105-13.104,13.105c-7.225,0-13.103-5.879-13.103-13.105C36.87,16.173,42.748,10.294,49.973,10.294zM14.262,59.146c-2.483-2.481-3.851-5.779-3.851-9.286c0-3.508,1.367-6.806,3.85-9.286l10.154-10.155c-2.65,9.022-3.788,18.516-3.178,27.617c0.219,3.271,0.671,6.409,1.321,9.404L14.262,59.146zM31.621,33.206c2.23,17.449,16.042,34.672,32.333,38.789c2.654,0.67,5.256,1,7.773,1c0.036,0,0.073-0.003,0.109-0.003l-12.58,12.581c-2.481,2.479-5.778,3.845-9.284,3.845c-2.441,0-4.773-0.676-6.805-1.914l0.004-0.007c-0.8-0.53-1.562-1.129-2.303-1.763c-0.058-0.057-0.12-0.104-0.177-0.161l-2.542-2.542c-5.227-6.001-8.514-14.93-9.221-25.51C28.393,49.515,29.354,41.167,31.621,33.206"],o={fill:"#333",stroke:"none"},k="span",d;for(var c in n){d=m[g](c);d&&(d=d[p](k)[0]);d&&b(d,32,32).path(n[c]).attr(o);}d=m[g]("sencha");if(d){var f=b(d[p](k)[0],32,32);f.set(f.path("M0,109.718c0-43.13,24.815-80.463,60.955-98.499L82.914,0C68.122,7.85,58.046,23.406,58.046,41.316c0,9.64,2.916,18.597,7.915,26.039c-7.44,18.621-11.77,37.728-13.228,56.742c-9.408,4.755-20.023,7.423-31.203,7.424c-1.074,0-2.151-0.025-3.235-0.075c-5.778-0.263-11.359-1.229-16.665-2.804L0,109.718zM157.473,285.498c0-0.015,0-0.031,0-0.047C157.473,285.467,157.473,285.482,157.473,285.498M157.473,285.55c0-0.014,0-0.027,0-0.04C157.473,285.523,157.473,285.536,157.473,285.55M157.472,285.604c0-0.015,0.001-0.031,0.001-0.046C157.473,285.574,157.472,285.588,157.472,285.604M157.472,285.653c0-0.012,0-0.024,0-0.037C157.472,285.628,157.472,285.641,157.472,285.653M157.472,285.708c0-0.015,0-0.028,0-0.045C157.472,285.68,157.472,285.694,157.472,285.708M157.472,285.756c0-0.012,0-0.023,0-0.034C157.472,285.733,157.472,285.745,157.472,285.756M157.471,285.814c0-0.014,0-0.028,0.001-0.042C157.471,285.785,157.471,285.8,157.471,285.814M157.471,285.858c0-0.008,0-0.017,0-0.026C157.471,285.841,157.471,285.85,157.471,285.858M157.47,285.907c0.001-0.008,0.001-0.018,0.001-0.026C157.471,285.889,157.471,285.898,157.47,285.907M157.47,285.964c0-0.009,0-0.017,0-0.023C157.47,285.949,157.47,285.955,157.47,285.964M157.469,286.01c0-0.008,0.001-0.016,0.001-0.022C157.47,285.995,157.469,286.002,157.469,286.01M157.469,286.069c0-0.008,0-0.016,0-0.022C157.469,286.053,157.469,286.062,157.469,286.069M157.468,286.112c0-0.005,0-0.011,0-0.017C157.468,286.101,157.468,286.107,157.468,286.112M157.467,286.214c0-0.003,0-0.006,0-0.008C157.467,286.208,157.467,286.212,157.467,286.214").attr({stroke:"none",fill:"#c5d83e"}),f.path("M66.218,210.846l-6.824-3.421c-0.016-0.009-0.033-0.018-0.048-0.025c-0.006-0.003-0.013-0.007-0.019-0.01c-0.01-0.005-0.017-0.009-0.028-0.015c-0.009-0.005-0.016-0.008-0.025-0.013c-0.008-0.005-0.012-0.007-0.021-0.011c-0.009-0.005-0.018-0.01-0.027-0.014c-0.007-0.005-0.013-0.008-0.02-0.012c-0.009-0.005-0.02-0.01-0.029-0.015c-0.006-0.003-0.007-0.004-0.014-0.007c-0.038-0.021-0.074-0.039-0.113-0.06c-0.002-0.001-0.006-0.003-0.008-0.005c-0.013-0.006-0.023-0.011-0.035-0.018c-0.005-0.002-0.007-0.003-0.011-0.006c-0.011-0.005-0.025-0.014-0.036-0.02c-0.004-0.002-0.005-0.002-0.009-0.004c-0.013-0.007-0.025-0.014-0.038-0.02l-0.003-0.002c-29.686-15.598-51.36-44.362-57.28-78.53c5.306,1.575,10.887,2.541,16.665,2.804c1.084,0.05,2.161,0.075,3.235,0.075c11.18-0.001,21.795-2.669,31.203-7.424C50.44,154.002,55.248,183.676,66.218,210.846").attr({stroke:"none",fill:"250-#aace36-#2fa042"}),f.path("M88.093,85.247l-3.657-1.834c-0.214-0.103-0.426-0.208-0.638-0.315h-0.001c-0.015-0.008-0.029-0.015-0.044-0.022l-0.001-0.001c-0.014-0.007-0.028-0.014-0.042-0.021c-0.001-0.001-0.003-0.002-0.004-0.002c-0.014-0.007-0.027-0.014-0.04-0.02c-0.003-0.002-0.003-0.002-0.006-0.004c-0.013-0.006-0.025-0.012-0.037-0.018c-0.003-0.002-0.006-0.004-0.009-0.005c-0.011-0.006-0.022-0.011-0.033-0.017c-0.004-0.002-0.008-0.004-0.013-0.006c-0.009-0.005-0.018-0.01-0.027-0.014c-0.006-0.003-0.013-0.007-0.018-0.01c-0.006-0.003-0.013-0.006-0.019-0.009c-0.01-0.005-0.018-0.009-0.027-0.014c-0.001-0.001-0.003-0.002-0.004-0.002c-7.075-3.631-13.103-9.016-17.512-15.578c-7.44,18.621-11.77,37.728-13.228,56.742c12.607-6.37,23.053-16.485,29.815-28.949L88.093,85.247zM213.364,195.358c-25.889,17.124-56.849,27.05-89.924,27.05c-2.519,0-5.05-0.057-7.591-0.174c-14.436-0.662-28.343-3.192-41.515-7.32l56.748,28.445c15.615,7.571,26.39,23.571,26.39,42.092v0.107c0,0.015-0.001,0.031-0.001,0.046v0.168c-0.001,0.014-0.001,0.028-0.001,0.042v0.066c0,0.009,0,0.019-0.001,0.026v0.081c0,0.007-0.001,0.015-0.001,0.022v0.059c0,0.009-0.001,0.019-0.001,0.026v0.017c0,0.032-0.001,0.063-0.001,0.095v0.008c-0.192,12.063-4.956,23.016-12.633,31.202c-3.517,3.753-7.647,6.924-12.23,9.355l14.101-7.202l7.859-4.011c36.137-18.041,60.955-55.376,60.955-98.509L213.364,195.358z").attr({stroke:"none",fill:"320-#79a933-#70a333:14-#559332:34-#277b2f:58-#005f27:86-#005020"}),f.path("M123.44,222.408c-2.519,0-5.05-0.057-7.591-0.174c-14.436-0.662-28.343-3.192-41.515-7.32l-8.117-4.067c-10.97-27.17-15.778-56.844-13.485-86.749c12.607-6.37,23.053-16.485,29.815-28.949l5.545-9.901l68.032,34.101c2.462,1.278,4.871,2.648,7.22,4.102c0.006,0.004,0.009,0.006,0.016,0.01c0.009,0.005,0.018,0.011,0.025,0.016c0.009,0.005,0.02,0.011,0.028,0.017c0.002,0.001,0.008,0.005,0.01,0.006c25.392,15.756,43.88,41.564,49.94,71.859C187.476,212.482,156.516,222.408,123.44,222.408").attr({stroke:"none",fill:"320-#79ab35-#7cba3d:53-#00aa4b"})).scale(0.1,0.1,6,0);}var j=b(m[p]("h1")[0][p](k)[0],100,100);j.path(e[0]).attr({fill:"#f89938",stroke:"none"});j.path(e[1]).attr({fill:"#39f",stroke:"none"});j.path(e[2]).attr({fill:"#333",stroke:"none"});j=b("top");j.rect(0,0,960,20).attr({fill:"#999",stroke:"#999"});j.rect(.5,.5,959,50,20).attr({fill:"#eee",stroke:"#eee"});})(Raphael);
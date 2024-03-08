let availablekeywords = [
    'Amritsar',
    'Barnala',
    'Bathinda',
    'Faridkot',
    'Fatehgarh Sahib',
    'Firozpur',
    'Fazilka',
    'Gurdaspur',
    'Hoshiarpur',
    'Jalandhar',
    'Kapurthala',
    'Ludhiana',
    'Malerkotla',
    'Mansa',
    'Moga',
    'Sri Muktsar Sahib',
    'Pathankot',
    'Patiala',
    'Rupnagar',
    'Sahibzada Ajit Singh Nagar',
    'Sangrur',
    'Shaheed Bhagat Singh Nagar',
    'Tarn Taran',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result =availablekeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
         console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}


/*
document.querySelector("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input value
    const Jalandhar = document.getElementById("input-box").value;

    // Redirect based on the keyword
    if (Jalandhar === "Jalandhar") {
        window.location.href = "Jalandhar.html";
    } else {
        // Handle other cases or display search results
        //document.getElementById("search-results").innerHTML = "No results found for " + keyword;
        window.location.href = "non.html";
    }
});

*/


function fun(){
    var pass = document.getElementById("input-box").value;
    if (pass == 'Amritsar'){
        window.location.href = 'Amritsar.html';
    }
    else{
        if (pass == 'Barnala'){
            window.location.href = 'Barnala.html';
        }
        else{
            if (pass == 'Bathinda'){
                window.location.href = 'Bathinda.html';
            }
            else{
                if (pass == 'Faridkot'){
                    window.location.href = 'Faridkot.html';
                }
                else{
                    if (pass == 'Fatehgarh Sahib'){
                        window.location.href = 'Fatehgarh Sahib.html';
                    }
                    else{
                        if (pass == 'Firozpur'){
                            window.location.href = 'Firozpur.html';
                        }
                        else{
                            if (pass == 'Fazilka'){
                                window.location.href = 'Fazilka.html';
                            }
                            else{
                                if (pass == 'Gurdaspur'){
                                    window.location.href = 'Gurdaspur.html';
                                }
                                else{
                                    if (pass == 'Hoshiarpur'){
                                        window.location.href = 'Hoshiarpur.html';
                                    }
                                    else{
                                        if (pass == 'Jalandhar'){
                                            window.location.href = 'Jalandhar.html';
                                        }
                                        else{
                                            if (pass == 'Kapurthala'){
                                                window.location.href = 'Kapurthala.html';
                                            }
                                            else{
                                                if (pass == 'Ludhiana'){
                                                    window.location.href = 'Ludhiana.html';
                                                }
                                                else{
                                                    if (pass == 'Malerkotla'){
                                                        window.location.href = 'Malerkotla.html';
                                                    }
                                                    else{
                                                        if (pass == 'Mansa'){
                                                            window.location.href = 'Mansa.html';
                                                        }
                                                        else{
                                                            if (pass == 'Moga'){
                                                                window.location.href = 'Moga.html';
                                                            }
                                                            else{
                                                                if (pass == 'Sri Muktsar Sahib'){
                                                                    window.location.href = 'Sri Muktsar Sahib.html';
                                                                }
                                                                else{
                                                                    if (pass == 'Pathankot'){
                                                                        window.location.href = 'Pathankot.html';
                                                                    }
                                                                    else{
                                                                        if (pass == 'Patiala'){
                                                                            window.location.href = 'Patiala.html';
                                                                        }
                                                                        else{
                                                                            if (pass == 'Rupnagar'){
                                                                                window.location.href = 'Rupnagar.html';
                                                                            }
                                                                            else{
                                                                                if (pass == 'Sahibzada Ajit Singh Nagar'){
                                                                                    window.location.href = 'Sahibzada Ajit Singh Nagar.html';
                                                                                }
                                                                                else{
                                                                                    if (pass == 'Sangrur'){
                                                                                        window.location.href = 'Sangrur.html';
                                                                                    }
                                                                                    else{
                                                                                        if (pass == 'Shaheed Bhagat Singh Nagar'){
                                                                                            window.location.href = 'Shaheed Bhagat Singh Nagar.html';
                                                                                        }
                                                                                        else{
                                                                                            if (pass == 'Tarn Taran'){
                                                                                                window.location.href = 'Tarn Taran.html';
                                                                                            }
                                                                                            else{
                                                                                                window.location.href = 'page not found.html';
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
}

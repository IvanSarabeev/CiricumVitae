const colorThemes = document.querySelectorAll('[name="theme"]');

// store theme
const storeTheme = function(theme){
    localStorage.setItem("theme", theme);
};

colorThemes.forEach((themeOption) =>{
    themeOption.addEventListener("click", ()=>{
        storeTheme(themeOption.id);
    })
});

 const setTheme = function(theme){
     document.documentElement.className = theme;
};

// apply theme
const retriveTheme = function(){
    const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach((themeOption)=>{
        if(themeOption.id === activeTheme){
            themeOption.checked = true;
        }
    });
    // retriveTheme(activeTheme);
    //Fallbackfor no:haS() support
    // document.documentElement.className = theme;
};

//Load
document.onload = retriveTheme();

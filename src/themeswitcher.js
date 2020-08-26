let curr_theme = localStorage.getItem('theme');

if( curr_theme == null )
{
    // set the theme for first time visitors
    setTheme('dark');
    // Save the theme set by the visitor in browswer's local storage
    localStorage.setItem('theme', curr_theme);
}

localStorage.setItem('theme', curr_theme);


function setTheme(mode){
    if (mode === 'light')
    {
        document.getElementsById('aa');
    }

    if (mode === 'dark')
    {
        document.getElementsById('aa');
    }

    localStorage.setItem('theme', mode);
}
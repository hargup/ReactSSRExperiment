const loadScript = (scriptPath, callback) => {  
    // const existingScript = document.getElementById('googleMaps');  if (!existingScript) {}
    const script = document.createElement('script');
    script.src = `http://localhost:3000/${scriptPath}`;    
    // script.id = 'googleMaps';
    document.body.appendChild(script);    script.onload = () => { 
      if (callback) callback();
    };
 if (existingScript && callback) callback();
};export default loadScript;
window.onload = () =>{
    let scrollpos = window.scrollY; 
    const about = document.querySelector("#about > div")
    const tech = document.querySelector("#skills > div")
    const awards = document.querySelector("#awards > div") 
    const projects = document.querySelector("#projects > div")
    const add_class_on_scroll = (dom) => dom.classList.add("come-in")  
    window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY; 
      if (scrollpos >= about.offsetHeight - 100) add_class_on_scroll(about)
      if (scrollpos >= tech.offsetHeight + 300) add_class_on_scroll(tech)
      if (scrollpos >= awards.offsetHeight + 500) add_class_on_scroll(awards) 
      if (scrollpos >= projects.offsetHeight + 700) add_class_on_scroll(projects)
    }) 
} 

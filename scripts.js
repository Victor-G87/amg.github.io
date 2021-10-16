window.onload = function() {
    setTimeout(function(){
        //deferred onload


    gsap.registerPlugin(ScrollTrigger);
    const rows = gsap.utils.toArray('.card-list');

    const tl = [];

    rows.forEach((row, index) => {
        tl.push(gsap.timeline({
            scrollTrigger: {
                trigger: row,
                start: "top 100%",
                end: "bottom bottom",
                markers: false,
                toggleActions: 'play none none reverse'
            }
        }))


        const elements = row.querySelectorAll('.item');
        console.log(elements)
        elements.forEach((element, i) => {
            tl[index].from(element, {
                opacity: 0,
                y: 200,
                duration: 1,
                ease: "powe3.out",
                stagger: 0.2
            });
        })

    })
}, 1000);
}
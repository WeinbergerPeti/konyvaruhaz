class KosarView
{
    constructor(tomb, szuloElem)
    {
        
        tomb.forEach(elem => 
        {
            szuloElem.append(`
            <div>
                <p>ID: ${elem.id} | Cím: ${elem.cim} | Szerző: ${elem.szerzo} | Ár: ${elem.ar}</p>
            </div>
            `);
            this.sorElem=szuloElem.children("div:last-child")
            console.log(this.sorElem);
        });
    }   
}

export default KosarView
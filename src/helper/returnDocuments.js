


export const returnDocuments = (snaptshot) =>{

    const document=[];

    snaptshot.forEach(snapHijo => {
        document.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return document;
}
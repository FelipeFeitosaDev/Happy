const Database = require('./db');
Database.then(async (db) => {

    //inserir dados na tabela
    // await db.run(`
    //     INSERT INTO orphanages (
    //         lat, 
    //         lng, 
    //         name, 
    //         about,
    //         whatsapp,
    //         images,
    //         instructions,
    //         opening_hours,
    //         open_on_weekends
    //     ) VALUES (
    //         "-23.5503558",
    //         "-46.6380009",
    //         "Lar das Meninas",
    //         "Presta assistência a crianças de 6 a 15 anos que se encontre em situação de risco e/ou de vulnerabilidade social.",
    //         "11993898761"
    //         "https://images.unsplash.com/photo-1594925782033-0238ef32fca0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "Venha quando se sentir a vontade e traga muito amor e paciência para dar.",
    //         "Horário de visitas Das 8h as 18h",
    //         "1"
    //     );
    // `)

    //consultar dados na tabela 
    // const orphanagesList = db.all(`SELECT * FROM orphanages`);

    //consultar orfanato pelo id 
    // const orphanageID = await db.all(`SELECT id FROM orphanages WHERE id = "1"`);
    // console.log(orphanageID); 

    //excluir dados da tabela
    // const removeData = db.run(`DELETE FROM orphanages WHERE id = ""`);
})
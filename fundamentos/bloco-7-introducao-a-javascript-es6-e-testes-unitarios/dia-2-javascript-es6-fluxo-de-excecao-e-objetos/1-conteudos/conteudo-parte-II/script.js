const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
    const array = Object.keys(student);
    for (const index in array) {
        console.log((`${array[index]}, Nível: ${student[array[index]]}`));
    }
};

console.log('Estudante 1');
listSkills(student1);

console.log(('Estudante 2'));
listSkills(student2);
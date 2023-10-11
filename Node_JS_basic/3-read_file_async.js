const fs = require('fs').promises; // Importation du module fs.promises pour les opérations asynchrones sur le système de fichiers.

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8'); // Lecture asynchrone du fichier spécifié par le chemin.
    const lines = data.split('\n').filter(Boolean); // Séparation du contenu du fichier en lignes et suppression des lignes vides.

    const students = lines.slice(1).map((line) => {
      const [firstName, lastName, age, field] = line.split(','); // Découpage de chaque ligne en propriétés firstName, lastName, age, et field pour chaque étudiant.

      return {
        firstName, lastName, age, field,
      };
    });

    const csStudents = students.filter((student) => student.field === 'CS'); // Filtrage des étudiants dont le champ est 'CS' (Computer Science).
    const sweStudents = students.filter((student) => student.field === 'SWE'); // Filtrage des étudiants dont le champ est 'SWE' (Software Engineering).

    // Affichage des résultats dans la console.
    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.map((student) => student.firstName).join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map((student) => student.firstName).join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database'); // Gestion des erreurs en rejetant la promesse avec le message d'erreur approprié.
  }
}

module.exports = countStudents;

const Nombre = "Daniel"
const Apellido = "Duarte"
const estudiante = Nombre.concat(" ").concat(Apellido),
  estudianteMayus = estudiante.toUpperCase(),
  estudianteMinus = estudiante.toLowerCase(),
  numeroLetras = estudiante.length,
  firstletter = Nombre[0],
  lastletter = Apellido[Apellido.length - 1],
  deleteName = estudiante.replace(/ /g, ""),
nombreEnEstudiante = estudiante.includes(Nombre)



import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

// Registrar la fuente Calibri para texto normal
Font.register({
  family: "Calibri",
  src: "/calibri.ttf", // Ruta de la fuente Calibri regular
});

// Registrar la fuente Calibri Bold para texto en negrita
Font.register({
  family: "Calibri Bold",
  src: "/calibrib.ttf", // Ruta de la fuente Calibri Bold
  fontWeight: "bold",
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Centra verticalmente el contenido
    alignItems: "center", // Centra horizontalmente el contenido
    textAlign: "center", // Centra el texto horizontalmente dentro de los contenedores
  },
  logo: {
    width: 250, // Ajusta el tamaño del logo según necesites
    marginBottom: 40,
  },
  section: {
    marginBottom: 10,
    fontSize: 20,
    fontFamily: "Calibri",
    width: "100%", // Asegura que el contenedor de la sección ocupe el ancho completo
    alignItems: "center", // Centra el contenido dentro de la sección
    display: "flex", // Asegura que el contenedor use flexbox
    justifyContent: "center", // Centra el contenido horizontalmente
  },
  row: {
    flexDirection: "row",
    justifyContent: "center", // Centra horizontalmente los elementos dentro del contenedor
    alignItems: "center",
  },
  label: {
    fontFamily: "Calibri Bold", // Usa la fuente en negrita para los labels
    fontWeight: "bold",
    marginBottom: 15, // Espacio entre la etiqueta y el número
  },
  text: {
    fontFamily: "Calibri",
    marginBottom: 15, // Espacio debajo de cada línea de texto
  },
});

export default function PDF({ formData }: { formData: any }) {
  // Determinar la causa final a mostrar en el PDF
  const causaFinal =
    formData.causa === "otro" ? formData.causaPersonalizada : formData.causa;

  return (
    <Document>
      <Page style={styles.page}>
        <Image style={styles.logo} src="/img/cjut-logo.png" />

        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>NÚMERO: </Text>
            <Text style={styles.text}>{formData.numero}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>USUARIO: </Text>
          <Text style={styles.text}>{formData.usuario}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>(ACTOR)</Text>
          <Text style={styles.text}>{formData.actor}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>(DEMANDADO)</Text>
          <Text style={styles.text}>{formData.demandado}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>CAUSA: </Text>
            <Text style={styles.text}>{causaFinal}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>N° PROCESO: </Text>
            <Text style={styles.text}>{formData.numeroProceso}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

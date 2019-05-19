// import XLSX from 'xlsx'
// import FileSaver from 'file-saver'

const exportExcel = (el,fileName) => {
    /* generate workbook object from table */
    var wb = XLSX.utils.table_to_book(document.querySelector(el))
    /* get binary string as output */
    var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
    try {
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), fileName)
    } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
    return wbout
}

export default exportExcel
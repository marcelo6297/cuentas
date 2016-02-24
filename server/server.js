 Meteor.startup(function () {
    if (Facturas.find().count() === 0) {
      var facturas = [
        {  
          fechaDocumento: '2015-01-01',
          rucVendedor: '80009735-1',
          timbrado: '80009735-1',
          categoria: 'super',
          numeroDocumento: '80009735-1',
          razonSocialVendedor: 'ANDE',
          monto: 300000,
          iva: 30000,
          total: 330000,
          totalPagado: 330000,
          rucTitular: 330000,
          observacion: 330000,
          tipoInversion: 'gasto'
        },
        {
          fechaDocumento: '2015-01-02',
          rucVendedor: '80009735-1',
          timbrado: '80009735-1',
          categoria: 'super',
          numeroDocumento: '80009735-1',
          razonSocialVendedor: 'ANDE',
          monto: 300000,
          iva: 30000,
          total: 330000,
          totalPagado: 330000,
          rucTitular: '3418902-5',
          observacion: 'pruebas',
          tipoInversion: 'gasto'
        },
        {
          fechaDocumento: '2015-01-03',
          rucVendedor: '80009735-1',
          timbrado: '80009735-1',
          categoria: 'super',
          numeroDocumento: '80009735-1',
          razonSocialVendedor: 'ANDE',
          monto: 300000,
          iva: 30000,
          total: 330000,
          totalPagado: 330000,
          rucTitular: '3418902-5',
          observacion: 'pruebas',
          tipoInversion: 'gasto'
        },
      ];
 
      for (var i = 0; i < facturas.length; i++) {
        Facturas.insert(facturas[i]);
      }
    }
  });
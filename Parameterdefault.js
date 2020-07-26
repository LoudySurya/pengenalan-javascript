const { createTracing } = require("trace_events");

function cetak (s,n=3,newLine=true){
    for(let i=0;i<n;i++){
        process.stdout.write(s);
        if(newLine)process.stdout.write('\n');
    }
}

console.log('Memanggil fungsi dengan satu parameter:');
cetak('RPL');

console.log("\n Memanggil Fungsi dengan 2 parameter:");
cetak ('RPL',2);

console.log("\n Memanggil Fungsi dengan 3 parameter:");
cetak ('RPL',1,true);
cetak ('TKJ',1,false);
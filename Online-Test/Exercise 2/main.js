
	
	var X = prompt('Nhap gia tri X')
	
    X = parseInt(X)

	for(i=0;i<X;i++) {
		//tao hang (row) *
		for(j=0;j<=i;j++) {
			document.writeln(" * ")
		}

		//xuong dong khi hien thi ket qua cua tung hang
		document.writeln("<br/>")
	}

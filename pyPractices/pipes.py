import os

# crear un pipe
r, w = os.pipe()

pid = os.fork()

if pid > 0: #Proceso padre
    os.close(r) #Cierra el extremode lectura
    mensaje = "Hola desde el padre"
    os.write(w, mensaje.encode())
    os.close(w) #Cierra el extremo de escritura

else: #Proceso hijo
    os.close(w) #Cierra el extremo de escritura
    mensaje = os.read(r, 100).decode()
    print(f"Mensaje recibido en el hijo: {mensaje}")
    os.close(r) #Cierra el extremo de lectura
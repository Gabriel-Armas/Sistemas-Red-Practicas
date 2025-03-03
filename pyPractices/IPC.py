from multiprocessing import Process, Value, Semaphore

def escribir(mem, sem) :
    with sem:
        mem.value = 42
        print("Proceso escritor: valor escrito en memoria compartida", mem.value)

def leer(mem, sem) :
    with sem:
        print("Proceso lector: valor leído de memoria compartida", mem.value)

if __name__ == '__main__':
    memoria_compartida = Value('i', 0)
    semaforo = Semaphore(1)

    p1 = Process(target=escribir, args=(memoria_compartida, semaforo))
    p2 = Process(target=leer, args=(memoria_compartida, semaforo))

    p1.start()
    p1.join()
    p2.start()
    p2.join()

    

#!/usr/bin/env python3
import socket
import threading
import time
import base64

def iniciar_servidor_falso(porta, payload_resposta):
    """Garante o recebimento e o tratamento limpo das conexões TCP locais"""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        s.bind(('127.0.0.1', porta))
        s.listen(1)
        conn, addr = s.accept()
        if porta == 80:
            conn.recv(1024)
        conn.sendall(payload_resposta)
        time.sleep(0.1)
        conn.close()
        s.close()
    except Exception:
        pass

def disparar_laboratorio_definitivo():
    print("[*] Iniciando...")
    
  
    h_b64 = b'UE9TVCAvbG9naW4gSFRUUC8xLjENCkhvc3Q6IGxvY2FsaG9zdA0KQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQNCkNvbnRlbnQtTGVuZ3RoOiA2Ng0KDQp1c2VyX2xvZ2luPXJvb3RfYWRtJnVzZXJfcGFzcz1TZWNMYWJIVFRQMjAyNiEmc2VjdXJpdHlfbGV2ZWw9aGlnaA=='
    http_payload = base64.b64decode(h_b64)
    

    f_b64 = b'MjIwIFdlbGNvbWUuIEZUUF9LRVl7U2VjTGFiRlRQMjAyNiF9DQpVU0VSIGFkbWluDQo='
    ftp_payload = base64.b64decode(f_b64)

    # Payload SMB Negotiate estruturado nativo
    s_b64 = b'AAAALf9TTUJyAAAAAAAAGBcHwAAAAAAAAAAAAAAAAD0wAAAEEQAMDgJbTlQgTE0gMC4xMgA='
    smb_payload = base64.b64decode(s_b64)

    # 1. Execução do fluxo HTTP (Porta 80)
    t_http = threading.Thread(target=iniciar_servidor_falso, args=(80, b"HTTP/1.1 200 OK\r\n\r\n"))
    t_http.start()
    time.sleep(0.1)
    try:
        cl = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        cl.connect(('127.0.0.1', 80))
        cl.sendall(http_payload)
        cl.close()
    except Exception: pass
    t_http.join()


    t_ftp = threading.Thread(target=iniciar_servidor_falso, args=(21, ftp_payload))
    t_ftp.start()
    time.sleep(0.1)
    try:
        cl = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        cl.connect(('127.0.0.1', 21))
        cl.recv(1024)
        cl.close()
    except Exception: pass
    t_ftp.join()


    t_smb = threading.Thread(target=iniciar_servidor_falso, args=(445, b"\x00\x00\x00\x00"))
    t_smb.start()
    time.sleep(0.1)
    try:
        cl = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        cl.connect(('127.0.0.1', 445))
        cl.sendall(smb_payload)
        cl.close()
    except Exception: pass
    t_smb.join()

    print("[+] Concluído.")

if __name__ == "__main__":
    disparar_laboratorio_definitivo()
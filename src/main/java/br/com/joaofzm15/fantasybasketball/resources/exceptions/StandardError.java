package br.com.joaofzm15.fantasybasketball.resources.exceptions;

import java.io.Serializable;
import java.time.Instant;

public class StandardError implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Instant timestamp;
	private Integer statusNumber;
	private String errorDescription;
	private String message;
	private String path;
	
	public StandardError() {
		
	}

	public StandardError(Instant timestamp, Integer status, String errorDescription, String message, String path) {
//		@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss'Z'", timezone = "GMT")
		this.timestamp = timestamp;
		this.statusNumber = status;
		this.errorDescription = errorDescription;
		this.message = message;
		this.path = path;
	}

	public Instant getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Instant timestamp) {
		this.timestamp = timestamp;
	}

	public Integer getStatus() {
		return statusNumber;
	}

	public void setStatus(Integer status) {
		this.statusNumber = status;
	}

	public String getError() {
		return errorDescription;
	}

	public void setError(String error) {
		this.errorDescription = error;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}
	
	
	
	

}

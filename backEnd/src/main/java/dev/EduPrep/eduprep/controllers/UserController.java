package dev.EduPrep.eduprep.controllers;

import dev.EduPrep.eduprep.entities.ApiResponse;
import dev.EduPrep.eduprep.entities.LoginRequest;
import dev.EduPrep.eduprep.entities.User;
import dev.EduPrep.eduprep.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping ("/api/user")
@CrossOrigin(origins = "http://localhost:5173") //Allow request from my react service
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> users(){
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserId(@PathVariable Integer id){
        Optional<User> user = userRepository.findById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User userDetails) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setFirstname(userDetails.getFirstname());
                    user.setLastname(userDetails.getLastname());
                    user.setEmail(userDetails.getEmail());
                    user.setPassword(userDetails.getPassword());
                    user.setIdWorkshop(userDetails.getIdWorkshop());
                    User updatedUser = userRepository.save(user);
                    return ResponseEntity.ok().body(updatedUser);
                }).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse> login(@RequestBody LoginRequest loginRequest){
        Optional<User> userOptional = userRepository.findByEmail(loginRequest.getEmail());
        if (userOptional.isPresent()){
            User user = userOptional.get();
            if(user.getPassword().equals(loginRequest.getPassword())){
                return ResponseEntity.ok(new ApiResponse("Login correcto", user));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse("Contraseña errónea, intenta nuevamente", null));
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse("No se encontró el email", null));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user){
        if(userRepository.findByEmail(user.getEmail()).isPresent()){
            return new ResponseEntity<>(
                    new ApiResponse("Ya existe un registro con ese correo"),
                    HttpStatus.CONFLICT
            );
        }

        User usery = new User();
        usery.setFirstname(user.getFirstname());
        usery.setLastname(user.getLastname());
        usery.setEmail(user.getEmail());
        usery.setPassword(user.getPassword());
        usery.setIdWorkshop(-1);

        userRepository.save(usery);

        return new ResponseEntity<>(
                new ApiResponse("Usuario ha sido creado", usery),
                HttpStatus.CREATED//201
        );
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable Integer id) {
        return userRepository.findById(id)
                .map(user -> {
                    userRepository.delete(user);
                    return ResponseEntity.noContent().build();
                }).orElse(ResponseEntity.notFound().build());
    }

}



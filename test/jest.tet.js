test('Devo conhecer as principais assertivas do jest', () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
});

test(' Devo saber trabalhar com objetos',() => {
    const obj = {name: 'Myltiane', email: 'myltiano@gmail.com'};
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'Myltiane');
    expect(obj.name).toBe('Myltiane');

    const obj2 = {name: 'Myltiane', email: 'myltiano@email.com'};
    expect(obj).toEqual(obj2);
    expect(obj).toBe(obj);    
});
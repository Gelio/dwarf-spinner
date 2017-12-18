import { Vec3 } from 'cannon';
import { vec3 } from 'gl-matrix';

import { CoordinateConverter } from 'services/CoordinateConverter';

describe('CoordinateConverter', () => {
  describe('renderingToPhysics', () => {
    it('should convert properly', () => {
      const v = vec3.fromValues(1, 2, 3);

      const result = CoordinateConverter.renderingToPhysics(v);

      expect(result.x).toEqual(-v[0]);
      expect(result.y).toEqual(v[2]);
      expect(result.z).toEqual(v[1]);
    });
  });

  describe('physicsToRendering', () => {
    it('should convert properly', () => {
      const v = new Vec3(1, 2, 3);

      const result = CoordinateConverter.physicsToRendering(v);

      expect(result[0]).toEqual(-v.x);
      expect(result[1]).toEqual(v.z);
      expect(result[2]).toEqual(v.y);
    });

    it('should produce a new vector when output vector was not provided', () => {
      const v = new Vec3(1, 2, 3);

      const result = CoordinateConverter.physicsToRendering(v);

      expect(result).toBeDefined();
    });

    it('should insert values into the output vector when provided', () => {
      const v = new Vec3(1, 2, 3);
      const result = vec3.create();

      expect(CoordinateConverter.physicsToRendering(result, v)).not.toBeDefined();
      expect(result[0]).toEqual(-v.x);
      expect(result[1]).toEqual(v.z);
      expect(result[2]).toEqual(v.y);
    });
  });
});
